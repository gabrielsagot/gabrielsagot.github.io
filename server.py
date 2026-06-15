"""Serveur local du portfolio.

- Sert le dossier du projet sur http://localhost:8080
- URL inconnue -> Portfolio_pro/404.html (statut HTTP 404 conservé)
- "/" -> redirection vers le portfolio
"""
import os
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

ROOT = os.path.dirname(os.path.abspath(__file__))
PAGE_404 = os.path.join(ROOT, "Portfolio_pro", "404.html")
PORT = int(os.environ.get("PORT", "8080"))


class PortfolioHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        if self.path in ("/", "/index.html"):
            self.send_response(302)
            self.send_header("Location", "/Portfolio_pro/index.html")
            self.end_headers()
            return
        super().do_GET()

    def send_error(self, code, message=None, explain=None):
        if code == 404 and os.path.isfile(PAGE_404):
            try:
                with open(PAGE_404, "rb") as f:
                    body = f.read()
                self.send_response(404)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                return
            except OSError:
                pass
        super().send_error(code, message, explain)

    def log_message(self, fmt, *args):
        print(f"  {self.address_string()} — {fmt % args}")


if __name__ == "__main__":
    os.chdir(ROOT)
    print(f"▸ Portfolio servi sur http://localhost:{PORT}/Portfolio_pro/index.html")
    print("▸ URL inconnue → page 404 personnalisée · Ctrl+C pour arrêter.")
    ThreadingHTTPServer(("127.0.0.1", PORT), PortfolioHandler).serve_forever()
