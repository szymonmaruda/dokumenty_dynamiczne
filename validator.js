function validateMarka() {
    var x = document.forms["form1"]["Marka"].value;
    var bladNazwa = document.getElementById('marka_alert');
    var pattern = /[0-9]/i;

    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (pattern.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Marka nie może zawierać liczb</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else if (x.length > 10) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Nazwa nie może być dłuższa niż 10 znaków</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validateModel() {
    var x = document.forms["form1"]["Model"].value;
    var bladNazwa = document.getElementById('model_alert');
    var pattern = /[0-9]/i;

    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (pattern.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Model nie może zawierać liczb</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else if (x.length > 10) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Nazwa nie może być dłuższa niż 10 znaków</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validateRok() {
    var x = document.forms["form1"]["Rok"].value;
    var bladNazwa = document.getElementById('rok_alert');
    var pattern = /[^0-9]/i;

    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (pattern.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else if (x.length > 4) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Rok nie może zawierać więcej niż 4 cyfry</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validateCena() {
    var x = document.getElementById('Cena').value;
    var bladNazwa = document.getElementById('cena_alert');
    var digits_patt = /[0-9]*/;
    var words_patt = /[a-z][A-Z]*/;


    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (words_patt.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
            bladNazwa.setAttribute("style", "display:block;");
            return false;
        } else if (digits_patt.test(x)) {
            var x = parseFloat(x).toFixed(2);
            document.getElementById('Cena').value = x;
            bladNazwa.setAttribute("style", "display:none");
            return true;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validatePaliwo() {
    var x = document.getElementById("Paliwo").options[Paliwo.selectedIndex].value;
    var bladNazwa = document.getElementById('paliwo_alert');

    if (x == 0) {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        bladNazwa.setAttribute("style", "display:none");
        return true;
    }
}

function validateKolor() {
    var x = document.getElementById("Kolor").value;
    var bladNazwa = document.getElementById('kolor_alert');
    var pattern = /[0-9]/i;

    if (x == 0) {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (pattern.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Kolor nie może zawierać liczb</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else if (x.length > 15) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Kolor nie może być dłuższy niż 15 znaków</p>';
            bladNazwa.setAttribute("style", "display:block");
            return false;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validatePojemnosc() {
    var x = document.getElementById('Pojemnosc').value;
    var bladNazwa = document.getElementById('pojemnosc_alert');
    var digits_patt = /[0-9]*/;
    var words_patt = /[a-z][A-Z]*/;

    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (words_patt.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
            bladNazwa.setAttribute("style", "display:block;");
            return false;
        } else if (digits_patt.test(x)) {
            var x = parseFloat(x).toFixed(1);
            document.getElementById('Pojemnosc').value = x;
            bladNazwa.setAttribute("style", "display:none");
            return true;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validatePrzebieg() {
    var x = document.getElementById('Przebieg').value;
    var bladNazwa = document.getElementById('przebieg_alert');
    var words_patt = /[a-z][A-Z]*/;

    if (x == "") {
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może być puste</p>';
        bladNazwa.setAttribute("style", "display:block");
        return false;
    } else {
        if (words_patt.test(x)) {
            bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Pole nie może zawierać liter!</p>';
            bladNazwa.setAttribute("style", "display:block;");
            return false;
        } else {
            bladNazwa.setAttribute("style", "display:none");
            return true;
        }
    }
}

function validateAll() {
    if (validateMarka() && validateModel() && validateRok() && validateCena() && validatePaliwo() && validateKolor() && validatePojemnosc() && validatePrzebieg()) {

        var rows = "";
        var marka = document.getElementById('Marka').value;
        var model = document.getElementById('Model').value;
        var rok = document.getElementById('Rok').value;
        var cena = document.getElementById('Cena').value;
        var paliwo = $("#Paliwo option:selected").html();
        var kolor = document.getElementById('Kolor').value;
        var pojemnosc = document.getElementById('Pojemnosc').value;
        var przebieg = document.getElementById('Przebieg').value;

        var bladNazwa = document.getElementById('element_istnieje_alert');
        bladNazwa.innerHTML = '<p class="alert alert-danger" role="alert">Taki element już istnieje</p>';

        //sprawdzanie czy element już istnieje
        var oTable = document.getElementById('myTable');

        //gets rows of table
        var rowLength = oTable.rows.length;

        var isElementInList=false;

        //loops through rows
        for (i = 1; i < rowLength; i++){
                var oCells = oTable.rows.item(i).cells;
                var cellVal = oCells.item(2).innerHTML;
                if(model == cellVal){
                  isElementInList=true;
                }
        }

        if(isElementInList){
          bladNazwa.setAttribute("style", "display:block");
          bladNazwa.setAttribute("style", "margin-top:30px");
        }
        else{
          document.getElementById("myTable").setAttribute("style", "display:table");
          rows += "<tr><td><input type=\"checkbox\" name=\"option\" class=\"options\"></input> </td> <td>" + marka + "</td> <td>" + model + "</td> <td>" + rok + "</td> <td>" + cena + "</td> <td>" + paliwo + "</td> <td>" + kolor + "</td> <td>" + pojemnosc + "</td> <td>" + przebieg + "</td> <td> <input type=\"radio\" name=\"edit\" class=\"edit\"></input> </td></tr>";
          $(rows).appendTo($("#myTable tbody"));
            $("#myTable").trigger("update");
            //$("#myTable").tablesorter();
          bladNazwa.setAttribute("style", "display:none");
          document.getElementById("form1").reset();
        }
    }
}

$(document).ready(function() {
    $("table").tablesorter();
    $("#marka_ascending").click(function() {
        // set sorting column and direction, this will sort on the first and third column the column index starts at zero
        var sorting = [[1,0]];
        // sort on the first column
        $("table").trigger("sorton",[sorting]);
        // return false to stop default link action
        return false;
    });
});



$(document).ready(function() {
    $("table").tablesorter();
    $("#marka_descending").click(function() {
        // set sorting column and direction, this will sort on the first and third column the column index starts at zero
        var sorting = [[1,1]];
        // sort on the first column
        $("table").trigger("sorton",[sorting]);
        // return false to stop default link action
        return false;
    });
});

$(document).ready(function() {
    $("table").tablesorter();
    $("#price_ascending").click(function() {
        // set sorting column and direction, this will sort on the first and third column the column index starts at zero
        var sorting = [[4,0]];
        // sort on the first column
        $("table").trigger("sorton",[sorting]);
        // return false to stop default link action
        return false;
    });
});

$(document).ready(function() {
    $("table").tablesorter();
    $("#price_descending").click(function() {
        // set sorting column and direction, this will sort on the first and third column the column index starts at zero
        var sorting = [[4,1]];
        // sort on the first column
        $("table").trigger("sorton",[sorting]);
        // return false to stop default link action
        return false;
    });
});

$(document).ready(function() {
    $("table").tablesorter();
    $("#capacity_ascending").click(function() {
        // set sorting column and direction, this will sort on the first and third column the column index starts at zero
        var sorting = [[7,0]];
        // sort on the first column
        $("table").trigger("sorton",[sorting]);
        // return false to stop default link action
        return false;
    });
});

$(document).ready(function() {
    $("table").tablesorter();
    $("#capacity_descending").click(function() {
        // set sorting column and direction, this will sort on the first and third column the column index starts at zero
        var sorting = [[7,1]];
        // sort on the first column
        $("table").trigger("sorton",[sorting]);
        // return false to stop default link action
        return false;
    });
});

$(document).ready(function(){
  $("#delete").click(function(){
        $('table tr').has('input[name="option"]:checked').remove()
  });
});

$(document).ready(function(){
  $('#edit').click(function(){

    document.getElementById('click').setAttribute("style","display:none");
    document.getElementById('update_data').setAttribute("style","display:block");

      var marka;
      marka = $('table').find('[type="radio"]:checked').map(function(){
      return $(this).closest('tr').find('td:nth-child(2)').text();
      }).get();
      $('#Marka').val(marka);

      var model;
      model = $('table').find('[type="radio"]:checked').map(function(){
      return $(this).closest('tr').find('td:nth-child(3)').text();
      }).get();
      $('#Model').val(model);

      var rok;
      rok = $('table').find('[type="radio"]:checked').map(function(){
      return $(this).closest('tr').find('td:nth-child(4)').text();
      }).get();
      $('#Rok').val(rok);

      var cena;
      cena = $('table').find('[type="radio"]:checked').map(function(){
      return $(this).closest('tr').find('td:nth-child(5)').text();
      }).get();
      $('#Cena').val(cena);

      var paliwo;
      paliwo = $('table').find('[type="radio"]:checked').map(function(){
      return $(this).closest('tr').find('td:nth-child(6)').text();
      }).get();

      switch (paliwo[0]) {
        case "Benzyna":
            $('#Paliwo').val(1);
          break;
        case "Diesel":
            $('#Paliwo').val(2);
          break;
        case "Hybryda":
            $('#Paliwo').val(3);
          break;
        case "Benzyna+LPG":
            $('#Paliwo').val(4);
          break;
        case "Elektryczny":
            $('#Paliwo').val(5);
          break;
        default:
             $('#Paliwo').val(0);
      }

      var kolor;
      kolor = $('table').find('[type="radio"]:checked').map(function(){
      return $(this).closest('tr').find('td:nth-child(7)').text();
      }).get();
      $('#Kolor').val(kolor);

      var pojemnosc;
      pojemnosc = $('table').find('[type="radio"]:checked').map(function(){
      return $(this).closest('tr').find('td:nth-child(8)').text();
      }).get();
      $('#Pojemnosc').val(pojemnosc);

      var przebieg;
      przebieg = $('table').find('[type="radio"]:checked').map(function(){
      return $(this).closest('tr').find('td:nth-child(9)').text();
      }).get();
      $('#Przebieg').val(przebieg);

  });
});
