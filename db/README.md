# Admin
| Att | Type | PK |
|-----|------|----|
|admin_id| autoIn  | 1  |
|name|      |   |   
|email|     |   |  
|password|  |   |
|level| text    |   |

# User role 
| Att | Type | PK |
|-----|------|----|
|

# Role 
| Att | Type | PK |
|-----|------|----|
|role_id| autoIn | 1|
|role_name| |string| |


# Teacher
| Att | Type | PK |
|-----|------|----|
|teacher_id| autoIn  | 1  |
|name|          |           |     
|email|         |           |   
|password|      |           | 
|sex|           |           |   
|religion|      |           |   
|add,phone|     |           |   

# Class
| Att | Type | PK |
|-----|------|----|
|class_id| autoIn  | 1  |
|name|      |   | 
|name_numeric| int     |   |
|teacher_id| | FK|

# Subject
| Att | Type | PK |
|-----|------|----|
|subject_id|  autoIn  |  1 |
|name|  |   |
|class_id|  |   FK| 
|teacher_id|    |   |


# Student
| Att | Type | PK |
|-----|------|----|
|studen_id| autoIn  | 1  |
|name|          |           |     
|email|         |           |   
|password|      |           |   
|sex|           |           |   
|religion|      |           |   
|add,phone|     |           |   
|parent's name| |           |   
|class_id|      |        FK | 


# Attendance
| Att | Type | PK |
|-----|------|----|
|attend_id| autoIn | 1 |
|status|    |   |
|student_id| |  |
|date|  |   |

# Exam
| Att | Type | PK |
|-----|------|----|
|exam_id| autoIn | 1 |
|name|  |   |     
|date|  |   |
|comment|   |   |

# Notice
| Att | Type | PK |
|-----|------|----|
|notice_id| autoIn | 1 |
|notice_title|  |   |
|content|   |   |
|timestamp| |   |

# Core :))
### Invoices
| Att | Type | PK |
|-----|------|----|
|invoice_id|  autoIn  |   1|
|student_id|    |   FK|
|title| |   |
|description|   |   |
|main_fee|  |   |
|others|    |   |
|ammount|   |   |
|create_timestapms| |   |
|due_date|  |   |
|pay_timestapms|    |   |
|pay_method|    |   |
|pay_details|   |   |
|status|    |   |

### Payment
| Att | Type | PK |
|-----|------|----|
|payment_id|  autoIn  |   1|
|payment_type|  |   |
|transaction_id| |  |
|invoice_id|    |FK  |
|student_id|    |FK|
|method|    |   |
|description|   |   |
|amount|    |   |
|timestamp| |   |

### Marks
| Att | Type | PK |
|-----|------|----|
|mark_id| autoInt  |   1|
|student_id|    |  FK |
|subject_id|    |   |
|class_id|  |   |
|exam_id|   |   |
|mark_total|    |   |
|attendence| int |  |
|comment|   |   |

### Parents - Optional
| Att | Type | PK |
|-----|------|----|
|parent_id| autoInt  |   1|
|student_id|    |  FK |
|name|      |   |   
|email|     |   |  
|password|  |   |
|relation_with_stud| |   |
