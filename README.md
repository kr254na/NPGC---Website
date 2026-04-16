# ER Diagram
``` mermaid
erDiagram
    MASTER-COURSE ||--o{ STUDENT-DETAILS : "has"
    MASTER-COURSE ||--o{ MASTER-COURSE-FEES : "defines"
    MASTER-COURSE ||--o{ STUDENT-EXAMINATION-FORMS : "includes"
    
    STUDENT-DETAILS ||--o{ STUDENT-EXAMINATION-FORMS : "fills"
    STUDENT-DETAILS ||--o{ STUDENT-RESULT : "receives"
    STUDENT-DETAILS ||--o{ STUDENT-SEMESTER-FEES : "pays"
    STUDENT-DETAILS ||--o{ ALUMNI-DETAILS : "becomes"
    
    STUDENT-EXAMINATION-FORMS }o--o{ MASTER-PAPER-DETAILS : "contains papers"
    STUDENT-EXAMINATION-FORMS }o--o{ MASTER-ELECTIVE-PAPER : "selects electives"
    
    ANNOUNCEMENTS ||--o{ ANNOUNCEMENT-FILES : "has"
    MASTER-EVENTS ||--o{ EVENT-PICTURES : "contains"

    STUDENT-DETAILS {
        string StudentRollNo PK
        int CourseId FK
        string StudentName
        string FatherName
        string DateOfBirth
        string Email
        varbinary Photo
    }

    MASTER-COURSE {
        int CourseId PK
        string CourseName
        int ExaminationFees
        int CourseDuration
        string CourseType
    }

    STUDENT-EXAMINATION-FORMS {
        string ExaminationSession PK
        string StudentRollNo PK
        int Semester PK
        string ReferenceId
        string PaperCode1
        string ElectiveCode
        string TransactionId
        int StatusKey
    }

    STUDENT-RESULT {
        string StudentRollNo PK
        int Semester PK
        string ExaminationType PK
        string ExaminationSession PK
        string SemesterSgpa
        string SemesterGrade
        string Result1
    }

    MASTER-PAPER-DETAILS {
        string PaperCode PK
        string PaperName
        string PaperNo
        date DateOfExamination
    }

    MASTER-ELECTIVE-PAPER {
        string ElectiveCode PK
        string PaperName
        int MaxSeats
        int PaperType
    }

    ALUMNI-DETAILS {
        string ReferenceId PK
        string StudentRollNo FK
        string AlumniName
        string PassingYear
        string CurrentOrganisationName
    }

    ANNOUNCEMENTS {
        int AnnouncementId PK
        string AnnouncementType
        string AnnouncementName
        date AnnouncementDate
    }
```


"# npgc-final-updated" 
