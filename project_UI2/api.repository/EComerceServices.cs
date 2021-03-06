using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using api.model;
using api.repository;
using api.model.Exceptions;
using System.IO;

namespace api.repository
{
    public class EComerceServices : IECommerceServices
    {
        public SqlConnection _connectionstring;
        public SqlCommand _cmd;

        public EComerceServices()
        {
            _connectionstring = new SqlConnection(DBconnection.ConnectionString);
        }


        //UserRegistration() is used to register the user details

        public bool UserRegistration(Registration reg)
        {


            bool isSuccess = false;
            try
            {

                {
                    using (_cmd = new SqlCommand($"INSERT INTO userDB VALUES ('" + reg.id + "','" +
                        reg.phone + "','" + reg.password + "','" + reg.name + "','" + reg.gender + "')", _connectionstring))
                    {
                        if (_connectionstring.State == System.Data.ConnectionState.Closed)
                            _connectionstring.Open();

                        _cmd.ExecuteNonQuery();

                        isSuccess = true;
                    }


                    if (_connectionstring.State == System.Data.ConnectionState.Open)
                        _connectionstring.Close();
                }
            }
            catch (Exception ex)
            {
                throw new UserException(ex.Message, ex);
            }
            finally
            {
                if (_connectionstring.State == System.Data.ConnectionState.Open)
                    _connectionstring.Close();
            }

            return isSuccess;
        }


        //UserLogin() is used to take data from database and login user details
        public bool UserLogin(Login _login)
        {
            bool isSuccess = false;
            try
            {
                _cmd = new SqlCommand("SELECT * FROM userDB where phone='" + _login.phone + "' ", _connectionstring);
                {
                    if (_connectionstring.State == System.Data.ConnectionState.Closed)
                        _connectionstring.Open();
                    SqlDataReader Reader = _cmd.ExecuteReader();
                    while (Reader.Read())
                    {
                        if (_login.password.Equals(Reader[2]))
                        {
                            isSuccess = true;
                        }
                    }

                }
            }
            catch (Exception ex)
            {
                throw new UserException(ex.Message, ex);
            }
            finally
            {
                if (_connectionstring.State == System.Data.ConnectionState.Open)
                    _connectionstring.Close();
            }

            return isSuccess;
        }

        //ResetPassword() is used to change the user password and save changes in database
        public bool ResetPassword(resetpassword _resetPassword)
        {
            bool isSuccess = false;
            try
            {

                _cmd = new SqlCommand($"UPDATE userDB SET password= '" + _resetPassword.password + "' WHERE  phone='" + _resetPassword.phone + "'", _connectionstring);
                {
                    if (_connectionstring.State == System.Data.ConnectionState.Closed)
                        _connectionstring.Open();

                    _cmd.ExecuteNonQuery();

                    isSuccess = true;
                }
            }
            catch (Exception ex)
            {
                throw new UserException(ex.Message, ex);
            }
            finally
            {
                if (_connectionstring.State == System.Data.ConnectionState.Open)
                    _connectionstring.Close();
            }

            return isSuccess;
        }
        public string ForgotPassword(int phone)
        {
            string _password = "";
            try
            {
                _cmd = new SqlCommand("select password from userDB where phone = '" + phone + "' ", _connectionstring);
                {
                    if (_connectionstring.State == System.Data.ConnectionState.Closed)
                        _connectionstring.Open();
                    _password = Convert.ToString(_cmd.ExecuteScalar());
                }
            }
            catch (Exception ex)
            {
                throw new UserException(ex.Message, ex);
            }
            finally
            {
                if (_connectionstring.State == System.Data.ConnectionState.Open)
                    _connectionstring.Close();
            }

            return _password;
        }
        //GetProduct() is display all product data from database
        public bool GetProduct(products _product)
        {
            bool isSuccess = false;
            try
            {
                _cmd = new SqlCommand("SELECT * FROM productDB  ", _connectionstring);
                {
                    if (_connectionstring.State == System.Data.ConnectionState.Closed)
                        _connectionstring.Open();
                    SqlDataReader Reader = _cmd.ExecuteReader();

                    isSuccess = true;
                }
            }



            catch (Exception ex)
            {
                throw new UserException(ex.Message, ex);
            }
            finally
            {
                if (_connectionstring.State == System.Data.ConnectionState.Open)
                    _connectionstring.Close();
            }

            return isSuccess;
        }
        //Jewellary() is display all jewellary details from database
        public bool Jewellary(string name)
        {
            bool isSuccess = false;
            try
            {
                _cmd = new SqlCommand("SELECT * FROM productDB where ProductName='" + name + "' ", _connectionstring);
                {
                    if (_connectionstring.State == System.Data.ConnectionState.Closed)
                        _connectionstring.Open();
                    SqlDataReader Reader = _cmd.ExecuteReader();

                    isSuccess = true;
                }
            }



            catch (Exception ex)
            {
                throw new UserException(ex.Message, ex);
            }
            finally
            {
                if (_connectionstring.State == System.Data.ConnectionState.Open)
                    _connectionstring.Close();
            }

            return isSuccess;
        }
        //Gadget() is display gadget all details from database
        public bool gadget(string name)
        {
            bool isSuccess = false;
            try
            {
                _cmd = new SqlCommand("SELECT * FROM productDB where ProductName='" + name + "' ", _connectionstring);
                {
                    if (_connectionstring.State == System.Data.ConnectionState.Closed)
                        _connectionstring.Open();
                    SqlDataReader Reader = _cmd.ExecuteReader();

                    isSuccess = true;
                }
            }



            catch (Exception ex)
            {
                throw new UserException(ex.Message, ex);
            }
            finally
            {
                if (_connectionstring.State == System.Data.ConnectionState.Open)
                    _connectionstring.Close();
            }

            return isSuccess;
        }
        //Dresess() is display all dresess details from database
        public bool Dresess(string name)
        {
            bool isSuccess = false;
            try
            {
                _cmd = new SqlCommand("SELECT * FROM productDB where ProductName='" + name + "' ", _connectionstring);
                {
                    if (_connectionstring.State == System.Data.ConnectionState.Closed)
                        _connectionstring.Open();
                    SqlDataReader Reader = _cmd.ExecuteReader();

                    isSuccess = true;
                }
            }



            catch (Exception ex)
            {
                throw new UserException(ex.Message, ex);
            }
            finally
            {
                if (_connectionstring.State == System.Data.ConnectionState.Open)
                    _connectionstring.Close();
            }

            return isSuccess;
        }
        //EditProduct() is Edit all products details in database
        public bool EditProduct(EditProduct editProduct)
        {
            bool isSuccess = false;
            try
            {

                _cmd = new SqlCommand($"UPDATE productDB SET ProductDescription= '" + editProduct.description + "',ProductPrice='" + editProduct.price + "'WHERE id='" + editProduct.id + "'", _connectionstring);
                {
                    if (_connectionstring.State == System.Data.ConnectionState.Closed)
                        _connectionstring.Open();

                    _cmd.ExecuteNonQuery();

                    isSuccess = true;
                }
            }
            catch (Exception ex)
            {
                throw new UserException(ex.Message, ex);
            }
            finally
            {
                if (_connectionstring.State == System.Data.ConnectionState.Open)
                    _connectionstring.Close();
            }

            return isSuccess;
        }

        //DeleteUserAcount() is delete all user details in database
        public bool DeleteUserAcount(int id)
        {
            bool isSuccess = false;
            try
            {

                _cmd = new SqlCommand($"DELETE from userDB WHERE id='"+id+"'", _connectionstring);
                {
                    if (_connectionstring.State == System.Data.ConnectionState.Closed)
                        _connectionstring.Open();

                    _cmd.ExecuteNonQuery();

                    isSuccess = true;
                }
            }
            catch (Exception ex)
            {
                throw new UserException(ex.Message, ex);
            }
            finally
            {
                if (_connectionstring.State == System.Data.ConnectionState.Open)
                    _connectionstring.Close();
            }

            return isSuccess;
        }



    }
}













