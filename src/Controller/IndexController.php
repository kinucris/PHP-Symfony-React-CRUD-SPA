<?php

namespace App\Controller;

use App\Entity\Incidentes;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }

    /**
     * @Route("/api/incidente/{incidenteId}", name="show", methods={"GET"})
     */
    public function show($incidenteId)
    {
        $incidente = $this->getDoctrine()->getRepository(Incidentes::class)->find($incidenteId);
        // $data = json_decode($request->getContent());

        return $this->json([
            'data' => $incidente
        ]);
    }

    /**
     * @Route("/api/incidente/", name="showAll", methods={"GET"})
     */
    public function showAll()
    {
        $incidentes = $this->getDoctrine()->getRepository(Incidentes::class)->findAll();
        // $data = json_decode($request->getContent());

        return $this->json([
            'data' => $incidentes
        ]);
    }

    /**
     * @Route("/api/incidente/", name="create", methods={"POST"})
     */
    public function create(Request $request)
    {
        $data = $request->request->all();
        // $data = json_decode($request->getContent(), true);

        $incidente = new Incidentes();
        $incidente->setTitulo($request->get('titulo'));
        $incidente->setDescricao($request->get('descricao'));
        $incidente->setCriticidade($request->get('criticidade'));
        $incidente->setTipo($request->get('tipo'));
        $incidente->setStatus($request->get('status'));

        $doctrine = $this->getDoctrine()->getManager();

        $doctrine->persist($incidente);
        $doctrine->flush();


        return $this->json([
            'data' => 'Incidente cadastrado com sucesso!'
        ]);
        // return $this->json($data);
    }

    /**
     * @Route("/api/incidente/{incidenteId}", name="update", methods={"PUT", "PATCH"})
     */
    public function update($incidenteId, Request $request)
    {
        $data = $request->request->all();

        $entityManager = $this->getDoctrine()->getManager();
        $incidente = $entityManager->getRepository(Incidentes::class)->find($incidenteId);

        if ($request->request->has('titulo'))
            $incidente->setTitulo($data['titulo']);

        if ($request->request->has('descrisao'))
            $incidente->setDescricao($data['descrisao']);

        if ($request->request->has('criticidade'))
            $incidente->setCriticidade($data['criticidade']);

        if ($request->request->has('tipo'))
            $incidente->setTipo($data['tipo']);

        if ($request->request->has('status'))
            $incidente->setStatus($data['status']);

        $entityManager->flush();

        return $this->json([
            'data' => 'Curso atualizado com sucesso!'
        ]);
    }

    /**
     * @Route("/api/incidente/{incidenteId}", name="delete", methods={"DELETE"})
     */
    public function delete($incidenteId)
    {
        $doctrine = $this->getDoctrine();
        $incidente = $doctrine->getRepository(Incidentes::class)->find($incidenteId);

        $manager = $doctrine->getManager();
        $manager->remove($incidente);
        $manager->flush();

        return $this->json([
            'data' => 'Curso removido com sucesso!'
        ]);
    }
}
