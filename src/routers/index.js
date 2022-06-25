import { Router } from "express";
const router = Router();

// rutas o solicitudes
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/proyects", (req, res) => {
  res.render("proyects");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

export default router;
