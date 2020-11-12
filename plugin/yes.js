client.on('message', message => {
    if (message.channel.id === '715397952708804661') {
        message.react('✔️')
            .then(() => message.react('🚫'))
    }
});

 
