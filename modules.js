var ui = {};

ui.navigation = `
    <nav class="navbar navbar-expand-lg navbar-light  bg-light">
        <a class="navbar-brand" href="#" onclick="defaultMadule()">BadBank</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#createAccount" onclick="loadCreateAccount()" id="create Account">CreateAccount</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadLogin()" id="login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadAllData()">AllData</a>
                </li>
            </ul>
        </div>
    </nav>
`;

var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;