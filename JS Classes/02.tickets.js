function tickets(ticketDescriptions, sortingCriteria) {
    
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = [];

    for (const tickedDescription of ticketDescriptions) {

        const splittedTicketDesc = tickedDescription.split("|");
        const destinationName = splittedTicketDesc[0];
        const price = Number(splittedTicketDesc[1]);
        const status = splittedTicketDesc[2];

        const newTicket = new Ticket(destinationName, price, status);
        tickets.push(newTicket);
    }
    
    let sortedTickets;

    if (sortingCriteria !== "price") {

        sortedTickets = tickets.sort((a, b) => {
            return a[sortingCriteria].localeCompare(b[sortingCriteria]);
         });

    } else {
        sortedTickets = tickets.sort((a, b) => a.price - b.price);
    }

    return sortedTickets;
}
