Feature: creation d'un utilisateur
        Background: un utilisateur et un administrateur existent
            Given l'admin Bob et l'utilisateur Lea existent

        Scenario Outline: échec - non respect des champs obligatoires : (login, address)
             When je renseigne un login:<login>
              And un mot de address:<address>
             Then je reçois une erreur
        Examples:
                  | login | address                                     |
                  |       | 0x2b4d87eff06f22798c30dc4407c7d83429aaa9abc |
                  | 12345 |                                             |
                  |       |                                             |

        Scenario: succès
            Given je suis connecté en tant que Bob
             When je renseigne l'login: x-
              And le model de address: user12345
              And la nom: Bart
             Then l'utilisateur est créée et sauvegardée

        Scenario: échec - création d'un utilisateur sans être admin'
            Given je suis connecté en tant que Lea
             When je renseigne l'login: ABCD
              And je renseigne le mot de address: admin12345
             Then je reçois une erreur 403


        Scenario: échec - création d'un utilisateur sans être connecté'
             When je renseigne l'login: ABCD
              And je renseigne le mot de address: admin12345
             Then je reçois une erreur 401
