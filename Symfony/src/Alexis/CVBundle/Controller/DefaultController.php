<?php

namespace Alexis\CVBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;


class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AlexisCVBundle:Default:index.html.twig');
    }
    public function contactAction()
    {
    	// Envoie d'un mail depuis le formulaire de conact	
        $request = Request::createFromGlobals();
        $contact = array();
        $contact['name'] = $request->query->get('name');
        $contact['email'] = $request->query->get('email');
        $contact['message'] = $request->query->get('message');
        $contact['subject'] = $request->query->get('subject');

        $message = \Swift_Message::newInstance()
            ->setSubject('Contact AS-web: '.$contact['subject'])
            ->setFrom($contact['email'])
            ->setTo('serres.alexis@gmail.com')
            ->setContentType('text/html')
            ->setBody(
                $this->renderView(
                    'AlexisCVBundle:Default:email.html.twig',
                    array(
                        'name' => $contact['name'],
                        'email' => $contact['email'],
                        'message' => $contact['message']
                    )
                )
            )
        ;
            
        $this->get('mailer')->send($message);

        return new Response('OK');
    }
}
