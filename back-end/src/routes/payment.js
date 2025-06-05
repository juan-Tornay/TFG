import Stripe from 'stripe';
import express from 'express';

const router = express.Router();
// Usa la clave secreta desde .env para mayor seguridad
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51RVxo8R90gNnKZZtuCEheqNdcNjVQJxvJ9UiaBIistoQrfbWUJrDkevNyEWx09SI0oghsLfd7HFyUz9TGnfi1L8j000WJhPZD7');

// Ruta de pago
router.post('/pagar', async (req, res) => {
  try {
    const { amount, currency, paymentMethodId } = req.body;
    // Si no se envía paymentMethodId, usa el de test de Stripe
    const method = paymentMethodId || 'pm_card_visa';
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: method,
      confirm: true,
    });
    res.json({ success: true, paymentIntent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;