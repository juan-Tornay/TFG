import Stripe from 'stripe';
import express from 'express';

const router = express.Router();
// Usa la clave secreta desde .env para mayor seguridad

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