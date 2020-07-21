(function(){


    
    const sliderControl = (function(){
        let _CurrentSlide = 0;
        let _timer = 6;
        let _animate;
    
        let _StageOne = [...document.querySelectorAll('.header__img--1  img')];
        let _StageTwo = [...document.querySelectorAll('.header__img--2 img')];
        
        function switchRight(){
            _setAnimate(); //clear timer out
    
            _StageOne[_CurrentSlide].classList.remove('active');
            _StageOne[_CurrentSlide].classList.add('non-active');
            _StageTwo[_CurrentSlide].classList.remove('active');
            _StageTwo[_CurrentSlide].classList.add('non-active');
            _CurrentSlide = ((_CurrentSlide + 1) % _StageOne.length);
            _StageOne[_CurrentSlide].classList.remove('non-active');
            _StageOne[_CurrentSlide].classList.add('active');
            _StageTwo[_CurrentSlide].classList.remove('non-active');
            _StageTwo[_CurrentSlide].classList.add('active');
        }
        function switchLeft(){
            _setAnimate(); //clear timer out
            
            _StageOne[_CurrentSlide].classList.remove('active');
            _StageOne[_CurrentSlide].classList.add('non-active');
            _StageTwo[_CurrentSlide].classList.remove('active');
            _StageTwo[_CurrentSlide].classList.add('non-active');
            _CurrentSlide = ((--_CurrentSlide) < 0) ? (_StageOne.length - 1) : _CurrentSlide;        
            _StageOne[_CurrentSlide].classList.remove('non-active');
            _StageOne[_CurrentSlide].classList.add('active');
            _StageTwo[_CurrentSlide].classList.remove('non-active');
            _StageTwo[_CurrentSlide].classList.add('active');
        
        }
        function _setAnimate(){
            if(_animate) clearTimeout(_animate);
            _animate = setTimeout(function(){
                switchRight();
            }, _timer*1000);
        }
    
        function startAnimation(){
            _setAnimate();
        }
    
        return {
           switchRight,
           switchLeft,
           startAnimation
        }
    })();
    
        sliderControl.startAnimation();
    
        const controlRight = document.querySelector('.controls__right');
        const controlLeft = document.querySelector('.controls__left');
    
        controlRight.onclick = function(){
            sliderControl.switchRight();
        }
        controlLeft.onclick = function(){
            sliderControl.switchLeft();
        }
    
    
        //Set in touch button activator
        const touchButton = document.querySelector('.nav__button');
        const contactCheckbox = document.querySelector('.contact__button');
    
        touchButton.onclick = function(){
            console.log(contactCheckbox);
            contactCheckbox.checked = !contactCheckbox.checked;
        }
        

})();