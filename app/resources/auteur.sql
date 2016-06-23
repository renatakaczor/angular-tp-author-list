-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 07 Décembre 2015 à 22:38
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `serians`
--

-- --------------------------------------------------------

--
-- Structure de la table `auteur`
--

CREATE TABLE IF NOT EXISTS `auteur` (
  `id_auteur` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `fonction` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_auteur`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Contenu de la table `auteur`
--

INSERT INTO `auteur` (`nom`, `prenom`, `fonction`) VALUES
('Almasy', 'Paul', 'Photographe'),
('Goupy', 'Didier', 'Photographe'),
('Le Danvic', 'Daniel', 'Photographe'),
('Turk', 'Philippe', 'Illustrateur'),
('Van Eersel', 'Patrice', 'Interviewer'),
('Ayrault', 'Philippe', 'Photographe'),
('Grillo', 'Alex', 'Musicien'),
('Vidard', 'Mathieu', 'Interviewer'),
('Stewart', 'Rob', 'Photographe'),
('Langot', 'Michel', 'Photographe'),
('Francq', 'Philippe', 'Illustrateur'),
('Fournier', 'Alain', 'Photographe'),
('Vezon', 'Thierry', 'Photographe'),
('Montvalon', 'Dominique de', 'Interviewer'),
('Blondeau', 'Manuel', 'Photographe'),
('Brinkmann', 'Bettina', 'Photographe'),
('Bartoli', 'Georges', 'Photographe'),
('Paoluzzo', 'Marco', 'Photographe'),
('Vallorani', 'Jean-Pierre', 'Photographe'),
('Chandelier', 'Estelle', 'Maquettiste'),
('Weber', 'Bob', 'Interviewer'),
('Le Scanff', 'Gilles', 'Photographe'),
('Sander', 'Eric', 'Photographe'),
('Salvat', 'Philippe', 'Photographe'),
('Scope image', '', 'Photographe'),
('Bednorz', 'Achim', 'Photographe'),
('Calm', 'Nathalie', 'Interviewer'),
('Lismonde', 'Pascale', 'Interviewer'),
('Diluka', 'Shani', 'Musicien'),
('L''ensemble Obsidienne', '', 'Musicien'),
('Les Biskotos', '', 'Musicien'),
('Orchestre national de Paris', '', 'Musicien'),
('Orchestre Philharmonique de Radio France', '', 'Musicien'),
('Keefe', 'John', 'Photographe'),
('Stegassy', 'Ruth', 'Interviewer'),
('Damase', 'Jo', 'Photographe'),
('Varilh', 'Clarisse', 'Musicien'),
('Enthoven', 'Rapha', 'Interviewer'),
('Hazan', 'Muriel', 'Photographe'),
('Aubin', 'Antoine', 'Illustrateur');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
