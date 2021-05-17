import { v4 as uuidv4 } from 'uuid';

class ExternalPaymentServiceAdapter {
    pendingCharges;
    chargeCurrency;
    constructor(externalPaymentService) {
        // Use console.log() for debugging
        this.chargeCurrency = externalPaymentService.chargeCurrency;
        this.pendingCharges = externalPaymentService.pendingCharges;
        // console.log('chargeCurrency' + this.externalPaymentService.chargeCurrency);
        // console.log('pendingCharges'+ this.externalPaymentService.pendingCharges);
    }

    createCharge(customerId, amount) {
         const chargeId = uuidv4();
         this.pendingCharges.push({
            chargeId,
            customerId,
            value: `${amount} ${this.chargeCurrency}`,
        });
        return chargeId;
    }

    cancelCharge( chargeId ) {
        this.pendingCharges = this.pendingCharges.filter(charge => charge.chargeId !== chargeId);
    }

    updateCharge({ chargeId, amount, currency }) {
        let chargeIndex=  this.pendingCharges.findIndex((charge)=> charge.chargeId == chargeId);
        this.pendingCharges[chargeIndex].amount = amount;
        this.pendingCharges[chargeIndex].currency = currency;
    }

    listCharges() {
        return this.pendingCharges;
    }
}

module.exports = ExternalPaymentServiceAdapter;

