using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVC_Jquery_Ajax.Models;

namespace MVC_Jquery_Ajax.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public JsonResult GetData()
        {
            var model = new HomeModel
            {
                ComapnyName = "ABC COMPANY",
                ComapnyAddress = "ABC ADDRESS"
            };

            return new JsonResult
            {
                Data = model,
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }
    }
}