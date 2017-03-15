using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Learn2Learn.Models
{
    public class Results
    {
        [Key]
        public int ID { get; set; }
        public int AuditoryResult { get; set; }
        public int VisualResult { get; set; }
        public int KinestheticResult { get; set; }
    
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }
<<<<<<< HEAD

=======
>>>>>>> 6de9dc8a8147b6d383b2334c18c5330e13de6743

        public virtual ApplicationUser ApplicationUser { get; set; }



    }
}