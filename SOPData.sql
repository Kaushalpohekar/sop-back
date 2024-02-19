-- Database creation query
CREATE DATABASE IF NOT EXISTS SOP_TEST;

-- Table structure for table `screens`
CREATE TABLE IF NOT EXISTS `screens` (
  `ScreenID` int NOT NULL AUTO_INCREMENT,
  `ScreenName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ScreenID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data for table `screens`
INSERT INTO `screens` VALUES (1,'Screen 1'),(2,'Screen 2'),(3,'Screen 3');

-- Table structure for table `SOP_content`
CREATE TABLE IF NOT EXISTS `SOP_content` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `FileName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `FilePath` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `screenID` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Duration` varchar(100) DEFAULT NULL,
  `TimeStamp` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table structure for table `SOP_users`
CREATE TABLE IF NOT EXISTS `SOP_users` (
  `UserId` varchar(100) NOT NULL,
  `UserName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `FirstName` varchar(100) DEFAULT NULL,
  `LastName` varchar(100) DEFAULT NULL,
  `Contact` varchar(100) DEFAULT NULL,
  `UserType` enum('Screen','Admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `CompanyEmail` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Location` varchar(100) DEFAULT NULL,
  `CompanyName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`UserId`)
);

-- Data for table `SOP_users`
INSERT INTO `SOP_users` VALUES 
  ('h6XI8TyD77','screen@sop.com','$2b$10$A4VvbMGL2lermdHFtKBQ9uT3NCGjcdfk9.U3qvWAxv1rCcK55/8Na','admin','sop','0000000000','Screen','sop@screen.com','Nagpur','Elkem Pvt. Ltd'),
  ('mQa4AKa6sm','admin@sop.com','$2b$10$uWvidKWiA8hCBVYB7xNmzuy7I9GlW.RbsXZ6k1mCBYhSqsSB76wni','admin','sop','0000000000','Admin','sop@admin.com','Nagpur','Elkem Pvt. Ltd');
