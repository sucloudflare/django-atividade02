# django-atividade02

Projeto de página de perfil organizado no padrão Django.

## Estrutura

- `templates/index.html`
- `static/css/style.css`
- `static/js/script.js`
- `static/img/`

## O que foi melhorado

- Template com `{% load static %}` e caminhos padronizados.
- HTML com semântica melhor (`main`, `aria-labelledby`, `viewport`).
- JavaScript sem `onclick` inline (evento registrado via script).

## Como usar

1. Coloque sua foto em `static/img/a.png`.
2. Garanta que o `settings.py` tenha `STATIC_URL = "static/"`.
3. Renderize `index.html` por uma view Django.