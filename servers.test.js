describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server and server earnings', function() {
    submitServerInfo();
    updateServerTable();

    let svrId = document.getElementById('server1');
    let svrInfo = svrId.querySelectorAll('td');

    expect(svrInfo[0].innerText).toEqual('Alice');
    expect(svrInfo[1].innerText).toEqual('$0.00');
    
  })

  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = ''
  });
});
