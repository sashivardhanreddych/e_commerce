using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.model
{

    public class products
    {
        public int id { get; set; }
        public string name { get; set; }
        //public string image { get; set; }
        public string description { get; set; }
        public int price { get; set; }
    }
    public class jelewllary
    {
        public int id { get; set; }
        public string name { get; set; }
        public string image { get; set; }
        public string description { get; set; }
        public int price { get; set; }
    }
    public class gadget
    {
        public int id { get; set; }
        public string name { get; set; }
        public string image { get; set; }
        public string description { get; set; }
        public int price { get; set; }
    }
    public class Dresess
    {
        public int id { get; set; }
        public string name { get; set; }
        public string image { get; set; }
        public string description { get; set; }
        public int price { get; set; }
    }
    public class EditProduct
    {

        public int id { get; set; }
        public string description { get; set; }
        public int price { get; set; }
    }
}


