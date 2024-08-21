-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: senso.senselive.in    Database: SOP_TEST
-- ------------------------------------------------------
-- Server version	8.0.39-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Content`
--

DROP TABLE IF EXISTS `Content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Content` (
  `contentId` char(36) NOT NULL,
  `ScreenID` int DEFAULT NULL,
  `table_header` varchar(255) DEFAULT NULL,
  `table_subheader` varchar(255) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `font` varchar(50) DEFAULT NULL,
  `interval_number` int DEFAULT NULL,
  PRIMARY KEY (`contentId`),
  KEY `ScreenID` (`ScreenID`),
  CONSTRAINT `Content_ibfk_1` FOREIGN KEY (`ScreenID`) REFERENCES `screens` (`ScreenID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Content`
--

LOCK TABLES `Content` WRITE;
/*!40000 ALTER TABLE `Content` DISABLE KEYS */;
INSERT INTO `Content` VALUES ('554f83ec-2e10-4e1d-bcd8-d5fc8537ab6a',2,'Kaushal','Develop','#5deeab','20',10),('67e2ad13-f6f1-4107-8672-9ed141247b73',4,'Kaushal','Kaushal is tesing','#a44646','20',10),('ab59078c-8daf-45d6-bad2-bafa5db9de6c',3,'Time','Pass','#8f2828','10',1),('f540b8b7-fd13-4767-8b63-080ab244f03b',1,'Test','Software Developer','#ff0000','20',1);
/*!40000 ALTER TABLE `Content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ContentData`
--

DROP TABLE IF EXISTS `ContentData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ContentData` (
  `content_data_id` char(36) NOT NULL,
  `content_id` char(36) DEFAULT NULL,
  `raw_material` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `highlight` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`content_data_id`),
  KEY `content_id` (`content_id`),
  CONSTRAINT `ContentData_ibfk_1` FOREIGN KEY (`content_id`) REFERENCES `Content` (`contentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContentData`
--

LOCK TABLES `ContentData` WRITE;
/*!40000 ALTER TABLE `ContentData` DISABLE KEYS */;
/*!40000 ALTER TABLE `ContentData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SOP_content`
--

DROP TABLE IF EXISTS `SOP_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SOP_content` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `FileName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `FilePath` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `screenID` int DEFAULT NULL,
  `Duration` varchar(100) DEFAULT NULL,
  `TimeStamp` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_screenID` (`screenID`),
  CONSTRAINT `fk_screenID` FOREIGN KEY (`screenID`) REFERENCES `screens` (`ScreenID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SOP_content`
--

LOCK TABLES `SOP_content` WRITE;
/*!40000 ALTER TABLE `SOP_content` DISABLE KEYS */;
/*!40000 ALTER TABLE `SOP_content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SOP_users`
--

DROP TABLE IF EXISTS `SOP_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SOP_users` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SOP_users`
--

LOCK TABLES `SOP_users` WRITE;
/*!40000 ALTER TABLE `SOP_users` DISABLE KEYS */;
INSERT INTO `SOP_users` VALUES ('h6XI8TyD77','screen@sop.com','$2b$10$A4VvbMGL2lermdHFtKBQ9uT3NCGjcdfk9.U3qvWAxv1rCcK55/8Na','admin','sop','0000000000','Screen','sop@screen.com','Nagpur','Elkem Pvt. Ltd'),('mQa4AKa6sm','admin@sop.com','$2b$10$uWvidKWiA8hCBVYB7xNmzuy7I9GlW.RbsXZ6k1mCBYhSqsSB76wni','admin','sop','0000000000','Admin','sop@admin.com','Nagpur','Elkem Pvt. Ltd');
/*!40000 ALTER TABLE `SOP_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `screens`
--

DROP TABLE IF EXISTS `screens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `screens` (
  `ScreenID` int NOT NULL AUTO_INCREMENT,
  `ScreenName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ScreenID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `screens`
--

LOCK TABLES `screens` WRITE;
/*!40000 ALTER TABLE `screens` DISABLE KEYS */;
INSERT INTO `screens` VALUES (1,'Screen 1'),(2,'Screen 2'),(3,'Screen 3'),(4,'Screen 4');
/*!40000 ALTER TABLE `screens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'SOP_TEST'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-21 13:52:25
