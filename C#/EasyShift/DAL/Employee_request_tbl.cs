//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Employee_request_tbl
    {
        public int employee_request_id { get; set; }
        public int employee_id { get; set; }
        public int shift_id { get; set; }
        public int job_id { get; set; }
        public int priority_id { get; set; }
        public int status { get; set; }
        public Nullable<System.DateTime> request_date { get; set; }
    
        public virtual Employee_tbl Employee_tbl { get; set; }
        public virtual Jobs_tbl Jobs_tbl { get; set; }
        public virtual Priority_tbl Priority_tbl { get; set; }
        public virtual Shift_tbl Shift_tbl { get; set; }
    }
}
