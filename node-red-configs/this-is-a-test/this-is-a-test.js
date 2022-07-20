module.exports = function(RED) 
{
    function CheckVal(config) 
    {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) 
        {
            if(typeof msg.payload == "string")
            {
                switch(config.condition)
                {
                    case "equals":
                        if(msg.payload === config.checkvalue)
                            node.send(msg);
                        break;
                    case "contains":
                        if(msg.payload.includes(config.checkvalue))
                            node.send(msg);
                        break;
                    case "notequals":
                        if(msg.payload !== config.checkvalue)
                            node.send(msg);
                        break;
                    case "notcontains":
                        if(!msg.payload.includes(config.checkvalue))
                            node.send(msg);
                        break;
                    case "regex":
                        if(!msg.payload.match(config.checkvalue + "/g"))
                            node.send(msg);
                        break;
                }
            }
        });
    }

    RED.nodes.registerType("this-is-a-test", CheckVal);
}