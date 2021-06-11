<?php

namespace App\Repository;

use App\Entity\Incidentes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Incidentes|null find($id, $lockMode = null, $lockVersion = null)
 * @method Incidentes|null findOneBy(array $criteria, array $orderBy = null)
 * @method Incidentes[]    findAll()
 * @method Incidentes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IncidentesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Incidentes::class);
    }

    // /**
    //  * @return Incidentes[] Returns an array of Incidentes objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Incidentes
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
