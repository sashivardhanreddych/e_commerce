using System;
using api.model;

namespace api.repository
{
    public interface IECommerceServices
    {
        bool UserRegistration(Registration reg);
        bool UserLogin(Login login);
        bool ResetPassword(resetpassword _resetPassword);
        bool GetProduct(products _product);
        bool Jewellary(string name);
        bool  gadget(string name);
        bool Dresess(string name);
        bool EditProduct(EditProduct editProduct);
        string ForgotPassword(int phone);
        

    }
}
