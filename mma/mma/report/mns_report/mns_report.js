frappe.query_reports["MNS Report"] = {
	"filters": [
		{
			"fieldname":"fiscal_year",
			"label": __("Fiscal Year"),
            "fieldtype": "Link",
            "options":"Fiscal Year",
            "width": "150",
            "reqd":1,
            "default": frappe.sys_defaults.fiscal_year
			
		}
	]
}