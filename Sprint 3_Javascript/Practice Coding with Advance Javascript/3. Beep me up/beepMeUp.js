function Messages(con) {
    const validContacts = con.filter(name => /^[A-Za-z]+$/.test(name));
    const count = validContacts.length;
  
    if (count === 0) {
      return "No one sent you a message!";
    } else if (count === 1) {
      return `${validContacts[0]} sent you a message!`;
    } else if (count === 2) {
      return `${validContacts[0]} and ${validContacts[1]} sent you a message!`;
    } else if (count === 3) {
        return `${validContacts[0]}, ${validContacts[1]} and ${validContacts[2]} sent you a message!`;
    } else {
      const othersCount = count - 2;
      return `${validContacts[0]}, ${validContacts[1]} and ${othersCount} others sent you a message!`;
    }
  }

  console.log(Messages(["Stanley","Keanu","Roger","Clarke"]));