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
    
    public partial class Employee_tbl
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Employee_tbl()
        {
            this.Employee_request_tbl = new HashSet<Employee_request_tbl>();
            this.PlacementResults_tbl = new HashSet<PlacementResults_tbl>();
        }
    
        public int employee_id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public Nullable<int> seniority_years { get; set; }
        public string employee_id_str { get; set; }
        public string mail { get; set; }
        public string cellphone_number { get; set; }
        public int num_shifts_in_week { get; set; }
        public Nullable<int> num_shifts_left_to_placement { get; set; }
        public int job_id { get; set; }
        public System.DateTime date_start_job { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Employee_request_tbl> Employee_request_tbl { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PlacementResults_tbl> PlacementResults_tbl { get; set; }
    }
}
