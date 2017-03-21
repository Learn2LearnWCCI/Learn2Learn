using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Learn2Learn.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Learn2Learn.Controllers
{
    public class ResultsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Results
<<<<<<< HEAD
        /*[Authorize]*/ //view profile
=======
        
>>>>>>> 206a1d346b3299f59e70aa19b13f51467bf57b06
        public ActionResult Index()
        {
            //var userID = User.Identity.GetUserId();
            //var user = (from u in db.Users
            //            where u.Id == userID
            //            select u).FirstOrDefault();
            UserManager<ApplicationUser> UserManager =
    new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));
            ApplicationUser currentUser = UserManager.FindById(User.Identity.GetUserId());
            var resultList = db.Results.ToList();
            if (!UserManager.GetRoles(currentUser.Id).Contains("CanManageAssessments"))
            {
                resultList = resultList.Where(x => x.ApplicationUser == currentUser).ToList();
            }
            return View(resultList);
            //var results = db.Results.ToList();
            //var author = results[0].ApplicationUser;
            //return View(author);
        }

        // GET: Results/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Results results = db.Results.Find(id);
            if (results == null)
            {
                return HttpNotFound();
            }
            return View(results);
        }

        // GET: Results/Create
        [Authorize] //take assessment
        public ActionResult Create()
        {
            return View();
        }


        // POST: Results/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,AuditoryResult,VisualResult,KinestheticResult,Date,ApplicationUser")] Results results)
        {
            if (ModelState.IsValid)
            {

                UserManager<ApplicationUser> UserManager =
                    new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));
                ApplicationUser currentUser = UserManager.FindById(User.Identity.GetUserId());
                results.ApplicationUser = currentUser;
                db.Results.Add(results);
                db.SaveChanges();
                return RedirectToAction("Index");

            }

            return View(results);
        }

        // GET: Results/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Results results = db.Results.Find(id);
            if (results == null)
            {
                return HttpNotFound();
            }
            return View(results);
        }

        // POST: Results/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,AuditoryResult,VisualResult,KinestheticResult")] Results results)
        {
            if (ModelState.IsValid)
            {
                db.Entry(results).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(results);
        }

        // GET: Results/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Results results = db.Results.Find(id);
            if (results == null)
            {
                return HttpNotFound();
            }
            return View(results);
        }

        // POST: Results/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Results results = db.Results.Find(id);
            db.Results.Remove(results);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
