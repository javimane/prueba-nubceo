-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: prueba_nubceo
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Actors`
--

DROP TABLE IF EXISTS `Actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Actors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` tinyint DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Actors`
--

LOCK TABLES `Actors` WRITE;
/*!40000 ALTER TABLE `Actors` DISABLE KEYS */;
INSERT INTO `Actors` VALUES (1,'Stallone',70,'Male'),(2,'Van Dame',65,'Male'),(3,'Henry Calvin',35,'Male'),(4,'Franchella',60,'Male'),(5,'Jenifer Lopez',48,'Female');
/*!40000 ALTER TABLE `Actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DirectorEpisodes`
--

DROP TABLE IF EXISTS `DirectorEpisodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DirectorEpisodes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `DirectorId` int DEFAULT NULL,
  `EpisodeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `DirectorEpisodes_EpisodeId_DirectorId_unique` (`DirectorId`,`EpisodeId`),
  KEY `EpisodeId` (`EpisodeId`),
  CONSTRAINT `directorepisodes_ibfk_1` FOREIGN KEY (`DirectorId`) REFERENCES `Directors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `directorepisodes_ibfk_2` FOREIGN KEY (`EpisodeId`) REFERENCES `Episodes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DirectorEpisodes`
--

LOCK TABLES `DirectorEpisodes` WRITE;
/*!40000 ALTER TABLE `DirectorEpisodes` DISABLE KEYS */;
INSERT INTO `DirectorEpisodes` VALUES (1,1,1),(2,1,2),(3,2,3),(4,3,4);
/*!40000 ALTER TABLE `DirectorEpisodes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Directors`
--

DROP TABLE IF EXISTS `Directors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Directors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` tinyint DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Directors`
--

LOCK TABLES `Directors` WRITE;
/*!40000 ALTER TABLE `Directors` DISABLE KEYS */;
INSERT INTO `Directors` VALUES (1,'James Cameron',55,'Male'),(2,'James Wan',45,'Male'),(3,'Tarantino',50,'Male'),(4,'Guillermo del Toro',51,'Male');
/*!40000 ALTER TABLE `Directors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EpisodeActors`
--

DROP TABLE IF EXISTS `EpisodeActors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EpisodeActors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `EpisodeId` int DEFAULT NULL,
  `ActorId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `EpisodeActors_ActorId_EpisodeId_unique` (`EpisodeId`,`ActorId`),
  KEY `ActorId` (`ActorId`),
  CONSTRAINT `episodeactors_ibfk_1` FOREIGN KEY (`EpisodeId`) REFERENCES `Episodes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `episodeactors_ibfk_2` FOREIGN KEY (`ActorId`) REFERENCES `Actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EpisodeActors`
--

LOCK TABLES `EpisodeActors` WRITE;
/*!40000 ALTER TABLE `EpisodeActors` DISABLE KEYS */;
INSERT INTO `EpisodeActors` VALUES (17,1,1),(18,1,2),(19,1,3),(21,2,3),(20,2,5),(22,3,4),(23,3,5);
/*!40000 ALTER TABLE `EpisodeActors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Episodes`
--

DROP TABLE IF EXISTS `Episodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Episodes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL,
  `tvShowId` int DEFAULT NULL,
  `seasonId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tvShowId` (`tvShowId`),
  KEY `seasonId` (`seasonId`),
  CONSTRAINT `episodes_ibfk_1` FOREIGN KEY (`tvShowId`) REFERENCES `TvShows` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `episodes_ibfk_2` FOREIGN KEY (`seasonId`) REFERENCES `Seasons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Episodes`
--

LOCK TABLES `Episodes` WRITE;
/*!40000 ALTER TABLE `Episodes` DISABLE KEYS */;
INSERT INTO `Episodes` VALUES (1,'1','2020-05-12 00:00:00',1,1),(2,'2','2020-06-12 00:00:00',1,1),(3,'3','2020-06-18 00:00:00',1,1),(4,'4','2020-07-30 00:00:00',2,1),(5,'5','2022-09-10 00:00:00',2,1);
/*!40000 ALTER TABLE `Episodes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MovieActors`
--

DROP TABLE IF EXISTS `MovieActors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MovieActors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MovieId` int DEFAULT NULL,
  `ActorId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `MovieActors_ActorId_MovieId_unique` (`MovieId`,`ActorId`),
  KEY `ActorId` (`ActorId`),
  CONSTRAINT `movieactors_ibfk_1` FOREIGN KEY (`MovieId`) REFERENCES `Movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `movieactors_ibfk_2` FOREIGN KEY (`ActorId`) REFERENCES `Actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MovieActors`
--

LOCK TABLES `MovieActors` WRITE;
/*!40000 ALTER TABLE `MovieActors` DISABLE KEYS */;
INSERT INTO `MovieActors` VALUES (1,1,1),(2,1,2),(3,2,3),(4,2,4),(6,3,1),(5,3,5);
/*!40000 ALTER TABLE `MovieActors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Movies`
--

DROP TABLE IF EXISTS `Movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `directorId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `directorId` (`directorId`),
  CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`directorId`) REFERENCES `Directors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Movies`
--

LOCK TABLES `Movies` WRITE;
/*!40000 ALTER TABLE `Movies` DISABLE KEYS */;
INSERT INTO `Movies` VALUES (1,'Superman','2020-10-23 00:00:00','Superheroes',2),(2,'Rambo','1985-10-25 00:00:00','Action',1),(3,'Aquaman','2020-05-05 00:00:00','Superheroes',3);
/*!40000 ALTER TABLE `Movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Seasons`
--

DROP TABLE IF EXISTS `Seasons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Seasons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `tvShowId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tvShowId` (`tvShowId`),
  CONSTRAINT `seasons_ibfk_1` FOREIGN KEY (`tvShowId`) REFERENCES `TvShows` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Seasons`
--

LOCK TABLES `Seasons` WRITE;
/*!40000 ALTER TABLE `Seasons` DISABLE KEYS */;
INSERT INTO `Seasons` VALUES (1,'2020-05-18 00:00:00',1),(2,'2020-12-28 00:00:00',1),(3,'2021-04-18 00:00:00',2),(4,'2023-05-12 00:00:00',2);
/*!40000 ALTER TABLE `Seasons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TvShowActors`
--

DROP TABLE IF EXISTS `TvShowActors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TvShowActors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TvShowId` int DEFAULT NULL,
  `ActorId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `TvShowActors_ActorId_TvShowId_unique` (`TvShowId`,`ActorId`),
  KEY `ActorId` (`ActorId`),
  CONSTRAINT `tvshowactors_ibfk_1` FOREIGN KEY (`TvShowId`) REFERENCES `TvShows` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tvshowactors_ibfk_2` FOREIGN KEY (`ActorId`) REFERENCES `Actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TvShowActors`
--

LOCK TABLES `TvShowActors` WRITE;
/*!40000 ALTER TABLE `TvShowActors` DISABLE KEYS */;
INSERT INTO `TvShowActors` VALUES (1,1,1),(2,1,2),(3,1,3),(5,2,3),(4,2,4),(6,3,2);
/*!40000 ALTER TABLE `TvShowActors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TvShows`
--

DROP TABLE IF EXISTS `TvShows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TvShows` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `channel` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TvShows`
--

LOCK TABLES `TvShows` WRITE;
/*!40000 ALTER TABLE `TvShows` DISABLE KEYS */;
INSERT INTO `TvShows` VALUES (1,'Game of thrones','HBO','2019-04-20 00:00:00'),(2,'El Encargado','Star +','2021-09-10 00:00:00'),(3,'Modern Family','Warner','2015-10-01 00:00:00');
/*!40000 ALTER TABLE `TvShows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refreshToken` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'test1','$2b$10$yX3UKWRrXJDIFhgzpHwwLOiEsLEBbASf.QKWx4NfaSxJ6dTARmMWK','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxIiwiaWF0IjoxNjk2NzgzMzc2LCJleHAiOjE2OTczODgxNzZ9.NQsEmlVUB9VsXy0Ea-4qZ90fs6pxK07rA7Oy5t_TO8s'),(2,'test','$2b$10$3aCEbwKGyFojBkDvLITTje5RVQGgNoG4DvmYadpoCEDHHaadkR5c6','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2OTY3ODQ4MzcsImV4cCI6MTY5NzM4OTYzN30.mmFdEh71SbMbPjqMJ2H5e_0T4Y6gE92gE3et-5Bmk3M');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-08 15:41:15
