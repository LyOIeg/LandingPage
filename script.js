	let open = document.getElementsByClassName('header__open'),
		close = document.getElementsByClassName('header__close'),
		menu = document.getElementsByClassName('menu')

		open[0].onclick = function(){
			open[0].style.display = 'none'
			close[0].style.display = 'flex'
			menu[0].style.display = 'flex'
		}
		close[0].onclick = function(){
			open[0].style.display = 'flex'
			close[0].style.display = 'none'
			menu[0].style.display = 'none'
		}