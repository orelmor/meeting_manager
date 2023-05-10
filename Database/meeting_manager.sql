-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2023 at 07:47 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meeting_manager`
--
CREATE DATABASE IF NOT EXISTS `meeting_manager` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `meeting_manager`;

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `groupCode` int(11) NOT NULL,
  `groupName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`groupCode`, `groupName`) VALUES
(1, 'Production team'),
(2, 'DevOps team'),
(3, 'Cyber security team'),
(4, 'Garage team');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetingCode` int(11) NOT NULL,
  `groupCode` int(11) NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `description` varchar(100) NOT NULL,
  `meetingRoom` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingCode`, `groupCode`, `startTime`, `endTime`, `description`, `meetingRoom`) VALUES
(2, 3, '2023-05-10 17:57:55', '2023-05-10 18:57:55', 'Meeting about new threats and dangers', 'hall room'),
(3, 2, '2023-05-17 14:57:00', '2023-05-18 16:57:00', 'Deadline for the new product', 'red room'),
(4, 4, '2023-05-30 18:00:28', '2023-05-30 19:00:28', 'New vehicles for the company arriving next friday from Germany', 'green room'),
(5, 3, '2023-05-25 18:30:11', '2023-05-26 18:30:11', 'Some meeting about general information', 'the theater room'),
(6, 3, '2023-05-22 18:30:11', '2023-05-22 19:30:11', 'Making clear about the new restrictions', 'the theater room'),
(7, 1, '2023-05-22 15:30:11', '2023-05-22 16:30:11', 'Making clear about the new restrictions', 'the theater room'),
(8, 3, '2023-05-11 20:30:00', '2023-05-01 20:30:00', 'addedd', 'blue');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`groupCode`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingCode`),
  ADD KEY `groupCode` (`groupCode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `groupCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`groupCode`) REFERENCES `groups` (`groupCode`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
