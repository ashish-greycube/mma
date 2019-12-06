frappe.query_reports["MMA Customer Statement of Account"] = {
	"filters": [
		{
			"fieldname":"customer",
			"label": __("Customer"),
            "fieldtype": "Link",
            "options":"Customer",
            "width": "150",
            "reqd":1
			
		},
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": "80",
			"default": frappe.datetime.month_start()
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"width": "80",
			"default": frappe.datetime.month_end()
		}
	]
}