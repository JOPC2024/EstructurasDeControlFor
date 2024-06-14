function edcf(numEjer)
{
    if(Number.isInteger(numEjer))
    {
        if(numEjer==1)
        {
            uno();
        }
        else if(numEjer==2)
        {
            dos();
        }
        else if(numEjer==3)
        {
            tres();
        }
    }
    else
    {
        alert('el ejercicio que escojiste no existe');
    }

    function uno()
    {
        let arreglos = [];
        for(let i = 1; i <= 50; i++)
        {
            if(i%2 != 0)
            {
                arreglos.push(i);
                console.log(i);
            }
        }
        alert(arreglos);
    }
    function dos()
    {
        let userInput = prompt('Favor de introducir un numero en el rango del 1 al 100:');
        let arreglo = [];
        userInput = parseInt(userInput);
        let pokemons = 
        [ 'bulbasaur',
          'ivysaur',
          'venusaur',
          'charmander',
          'charmeleon',
          'charizard',
          'squirtle',
          'wartortle',
          'blastoise',
          'caterpie',
          'metapod',
          'butterfree',
          'weedle',
          'kakuna',
          'beedrill',
          'pidgey',
          'pidgeotto',
          'pidgeot',
          'rattata',
          'raticate',
          'spearow',
          'fearow',
          'ekans',
          'arbok',
          'pikachu',
          'raichu',
          'sandshrew',
          'sandslash',
          'nidoran-f',
          'nidorina',
          'nidoqueen',
          'nidoran-m',
          'nidorino',
          'nidoking',
          'clefairy',
          'clefable',
          'vulpix',
          'ninetales',
          'jigglypuff',
          'wigglytuff',
          'zubat',
          'golbat',
          'oddish',
          'gloom',
          'vileplume',
          'paras',
          'parasect',
          'venonat',
          'venomoth',
          'diglett',
          'dugtrio',
          'meowth',
          'persian',
          'psyduck',
          'golduck',
          'mankey',
          'primeape',
          'growlithe',
          'arcanine',
          'poliwag',
          'poliwhirl',
          'poliwrath',
          'abra',
          'kadabra',
          'alakazam',
          'machop',
          'machoke',
          'machamp',
          'bellsprout',
          'weepinbell',
          'victreebel',
          'tentacool',
          'tentacruel',
          'geodude',
          'graveler',
          'golem',
          'ponyta',
          'rapidash',
          'slowpoke',
          'slowbro',
          'magnemite',
          'magneton',
          'farfetchd',
          'doduo',
          'dodrio',
          'seel',
          'dewgong',
          'grimer',
          'muk',
          'shellder',
          'cloyster',
          'gastly',
          'haunter',
          'gengar',
          'onix',
          'drowzee',
          'hypno',
          'krabby',
          'kingler',
          'voltorb' ];
        if(Number.isInteger(userInput))
        {
            if(userInput > 0 && userInput < 101)
            {
                for(let i=1; i<=userInput; i++)
                {
                    if(i%5 == 0)
                    {
                        arreglo.push(pokemons[i-1]);
                        console.log(pokemons[i-1]);
                    }
                }
                alert(arreglo);
            }
            else
            {
                alert('el numero introducido no esta en el rango del 1 al 100, vuelve a intentarlo');
            }
        }
        else
        {
            alert('el dato introducido no es un numero, vuelve a intentarlo');
        }
    }
    function tres()
    {
        let arreglo = [4,'dos',8,'tres',5,9,1,'cero'];
        let arreglo2 = [];
        for(let i=0; i<arreglo.length;i++)
        {
            if(Number.isInteger(arreglo[i]))
            {
                arreglo2.push(arreglo[i]);
                console.log(arreglo[i]);
            }
        }
        alert(arreglo2);
    }
}