import { database } from './Database'
import { Producto } from '../domain/ProducUser'
import { ProductoRepository } from "../domain/User-repository"
import { QueryError } from 'mysql2'

export class productoRepositori implements ProductoRepository {


  async putUser(Nombre: string, Telefono: string, Correo: string): Promise<Producto> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      const sql = `UPDATE dbrest.users SET Correo='${Correo}', Telefono='${Telefono}' WHERE Nombre='${Nombre}'`;
      mysql.connection.query(sql, (error: QueryError, results: Producto) => {
        if (error) {
          reject(error)

        } else {
          resolve(results);
        }
      });
    })
  };
  async deleteById(Nombre: string): Promise<Producto | null> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      mysql.connection.query(`DELETE FROM dbrest.users WHERE Nombre = '${Nombre}'`, (error: QueryError, rows: Producto) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows)
        }
      });
    });
  }
  async getById(Nombre: string): Promise<Producto | null> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      mysql.connection.query(`SELECT * FROM dbrest.users WHERE Nombre = '${Nombre}';`, (error: QueryError, rows: Producto) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows)
        }
      });
    });
  }
  async getUser(): Promise<Producto[] | null> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      mysql.connection.query("SELECT * FROM dbrest.users", (error: QueryError, rows: Producto[]) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows)
        }
      });
    });
  };


  async create(Nombre: string, Telefono: string, Correo: string): Promise<Producto> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      const sql = `INSERT INTO dbrest.users(Nombre,Telefono,Correo) VALUES ('${Nombre}','${Telefono}','${Correo}')`;
      mysql.connection.query(sql, (error: QueryError, results: Producto) => {
        if (error) {
          reject(error)
        } else {
          resolve(results);
        }
      });
    })
  };
}