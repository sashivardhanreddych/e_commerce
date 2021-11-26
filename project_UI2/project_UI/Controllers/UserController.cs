using api.model;
using api.repository;
using Microsoft.AspNetCore.Mvc;



namespace project_UI.Controllers
{
    public class UserController : Controller
    {
        private readonly IECommerceServices _service;
        public UserController(IECommerceServices registerservice)
        {
            _service = registerservice;
        }
        [HttpPost, Route("api/users/register")]
        public bool UserRegistration(Registration _register)
        {

            if (_service.UserRegistration(_register))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        

        [HttpGet, Route("api/user/Login")]
        public bool Login(Login _applicationLogin)
        {
           
            if (_service.UserLogin(_applicationLogin))
            {
                return true;
            }

            else
            {
                return false;
            }
        }
        [HttpPatch, Route("api/users/resetpassword")]
        public bool ResetPassword(resetpassword _resetPassword)
        {

            if (_service.ResetPassword(_resetPassword))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        [HttpGet, Route("api/users/ForgotPssword")]
        public string ForgotPassword(int phone)
        {

            return _service.ForgotPassword(phone);
        }


        [HttpGet, Route("api/Allproducts")]
        public bool GetProduct(products _product)
        {
            if (_service.GetProduct(_product))
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        
        [HttpGet, Route("api/products/jewelary{name}")]
        public bool Jewellary(string name)
        {
            if(_service.Jewellary(name))
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        [HttpGet, Route("api/products/gadget{name}")]
        public bool gadget(string name)
        {
            if (_service.gadget(name))
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        [HttpGet, Route("api/products/dresess{name}")]
        public bool Dresess(string name)
        {
            if (_service.Dresess(name))
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        [HttpPatch, Route("api/Product/editproduct")]
        public bool EditProduct(EditProduct editProduct)
        {

            if (_service.EditProduct(editProduct))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        [HttpDelete, Route("api/users/Delete")]
        public bool DeleteUserAcount(int deleteUserAcountId)
        {

            if (_service.DeleteUserAcount(deleteUserAcountId))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
    

