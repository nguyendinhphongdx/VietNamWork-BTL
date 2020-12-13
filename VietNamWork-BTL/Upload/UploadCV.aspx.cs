using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace VietNamWork_BTL.Core
{
    public partial class UploadCV : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Boolean success = false;
            string name =  Request.Form.Get("name");
            HttpPostedFile file = (HttpPostedFile)Request.Files.Get(0);
            string PathSystem = Server.MapPath("CVs\\").ToString();
           // Response.Write(Path.GetDirectoryName(Server.MapPath("CVS")));
            if (Directory.Exists(PathSystem) == true)
            {
                Response.Write("đã tồn tại :" + PathSystem  + "<br/>");
                Directory.CreateDirectory(PathSystem);
            } else
            {
                Response.Write("Chưa tồn tại :" + PathSystem +"<br/>");
            }
            try
            {
                if (!System.IO.File.Exists(PathSystem + file.FileName)) // chưa tồn tại file
                {
                    Response.Write("Đã Lưu :" + file.FileName + "<br/>");
                    file.SaveAs(PathSystem + file.FileName);
                    success = true;
                }
                else
                {
                    Response.Write("File Đã Có Sẵn Không Lưu Lại :" + file.FileName + "<br/>");
                    success = false;
                }
            }
            catch (Exception ex)
            {
                success = false;
            }
            Response.Write("status"+success + "<br/>");
            HttpCookie cookie = new HttpCookie("status");
            cookie.Value = success.ToString();
           // DateTime timeout = new DateTime();
            //cookie.Expires = new DateTime(timeout.Year,timeout.Month,timeout.Day,timeout.Hour,timeout.Minute,timeout.Second+10);
            Response.Cookies.Remove("status");
            Response.Cookies.Add(cookie);
            // Response.Cookies["status"].Value = "success";
            //Session.Add("status",success);
            string pageCurrent = HttpContext.Current.Request.Url.AbsolutePath;
            Response.Redirect("~/Custumer/detailJob");
        }
    }
}