(function(console) {
	"use strict";

	function getBox(width, height) {
		return {
			string: "+",
			style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: 0;"
		}
	}

	console.image = function(url, scale) {
		scale = scale || 1;
		var img = new Image();

		img.onload = function() {
			var dim = getBox(this.width * scale, this.height * scale);
			console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;");
		};

		img.src = url;
	};
})(console);

$(function () {

    $.getJSON('https://discord.com/api/guilds/895546064260718622/widget.json', function (data) {
        $('.discord-members').html(data.presence_count);
    });
    
    $('.navbar-toggler').on('click', function () {
        $('body').addClass('nav-open');
    })

    $('.modal-btn').on('click', function () {
        let target = $(this).data('target')
        $('.'+target).addClass('open')
    })

    $('.modal').on('click', function () {
        $('.modal').removeClass('open')
    })

    $('.modal .block').on('click', function (e) {
        e.stopImmediatePropagation()
    })
    
    $(document).on('click', function (e) {
        if($(e.target).parents('.navbar').length > 0 || $(e.target).parents('.navbar-toggler').length > 0 || $(e.target).hasClass('navbar-toggler')) {
            return
        }
        $('body').removeClass('nav-open');
    })

    // Pop up
    if($('.tm-gallery').length) {
        $('.tm-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: { enabled: true }
        });
        
        $('.tm-gallery-home').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        });

        $('.tm-gallery-spawn').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        });
    }

    // Gallery

    $('.question .title').on('click', function () {
        $(this).parent().toggleClass('open');
    })
    
    $('.copy-btn').on('click', function () {
        let text = $(this).data('value')
        copyToClipboard(text)
        $(this).addClass('copied')
    })

    $('.players').on('click', 'a', function (e) {
        let uuid = $(this).find('img').data('uuid')
        if(uuid == '778b9f44-a2f2-4a64-9636-b041a7776010' || uuid == '5a92a4f2-c461-4abb-8e90-f6c1359c2daa') {
            e.preventDefault()
            e.stopImmediatePropagation()
            clearskins()
            showskins()
        }
    })

    $('.copy-btn').on('mouseover', function () {
        $(this).addClass('hover')
    })
    $('.copy-btn').on('mouseleave', function () {
        $(this).removeClass('hover copied')
    })

    function copyToClipboard(text) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text)[0].select();
        $temp[0].setSelectionRange(0, 99999);
        // document.execCommand("copy");

        navigator.clipboard.writeText($temp[0].value);

        $temp.remove();
    }

    const text = '%c0b%c0t'
    const css1 = 'font-family:Comic Sans MS; font-size:50px; color:rgb(223,44,30); font-weight:bold; background: linear-gradient(rgb(37,255,37), rgb(0,230,0)); border-radius: 5px 0 0 5px; padding: 10px 0 10px 50px'
    const css2 = 'font-family:Comic Sans MS; font-size:50px; font-weight:bold; background: linear-gradient(rgb(37,255,37), rgb(0,230,0)); border-radius: 0 5px 5px 0; padding: 10px 50px 10px 0; color:rgb(3,10,193);'
    console.log(
        text, 
        css1,
        css2
    )
    console.image("data:image/gif;base64,R0lGODlhMAAwAPf/APC75O7B9Mr30tT1u/O10tzY+Onc+PXtvM741PjeuvjasvW808X23fjGquvf+Pa8zc/48dT49t7j+N7t+Ozyydfm+Nnl+PjWt+Lzwsr4wdX47M70+PHZ+NHl+NXr+PTU7M7y+NL42fjkwPjivdPy+Nf43fLQ8d73zeTm+Orwwdr1wvfR3db45e3a+Mr32eLyvOrvuN3yucb3yvHN88r1+PjQrvLC4tvr+NP4z970wvLF6fjPs/jOrc335fHwxef0ysT19fPsuMT17+fxvOLf+OnX+Mb3zfXT5sr3ufjetufK+OvF+PavwMr4vvesuu/J9uHr+NH448by+Nz2x8f4wPXU6sf4vfTM5/jYuvXJ3vjHq8n27c3348/o+PjTsPLD5PjP1vi3wfjByvi0vvirttT4+Nj4zvjvxvLX+PjuxPjJsNT4yM74+PHT+Mv3+PjtwfjMtM/4wvDP+PjruMf4ue3C+PjEqfjIrvjsvMT1+Mr4vMn2+O/K+PjFqtv0vM72ufjltsz37fjtxeHa+PPvxcn34vjpt/jUsfXsuPjTtPbF1c/47evyxfjlv+jwvNH43dzo+Nj409f0+Pjpv9n4zvjLsPjMsPjXss/4yM333tr4zvjQ2Mv38vjP2PPW9Pjevdj2wvjluezxxejS+OzT+PjuxvjP19r3zdvh+OjyxvDJ9fa4yfLI5/TL5Pe5x/XA1fTN6OLj+PPA3fTD3PjZuvjbuPjQtsjw+Mvz+NP3ws/4x/Twx/jlvfjmvfWyy/TE4PDP99P40/jsw/jowvO/29T4zOTc+PjbvM342sr4zOji+PjJrO/V+Pjau9f43PjXudr2x/jYtvjfs/PtvPjqxM/4w/jhu/PP7uzwwe7A8eDS+Oba+PTuwdH1+Nbw+PjCzPDH8cX25PLS9Nb44OP0xubyweTzxuT0xufvuPPG5PjJrvfE0dvzufXvxPLI6Nb3yOvvvOzuuO3vvPjMsuHk+Mz36snv+NX48vXB2PC86PjRtOL1y/bS4VhSW3tzgP///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIyRjRGMzYwOTNDODExRUJBQzJERTgxNzQ3ODQ2Q0NBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIyRjRGMzYxOTNDODExRUJBQzJERTgxNzQ3ODQ2Q0NBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjJGNEYzNUU5M0M4MTFFQkFDMkRFODE3NDc4NDZDQ0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjJGNEYzNUY5M0M4MTFFQkFDMkRFODE3NDc4NDZDQ0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFCgD/ACwAAAAAMAAwAAAI/wD9CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixLJaNxop6PHOSBD0hlJMo/Jk3VSqmS4kaPHjiFFkhx5EqXKlCxbknkJM+acmTRr5rmJc6HOnTx9/gQqdCjRnC152lEKlE5TonWgunxJlalQrAzHiB3bp6xZPGjT6lnLdo/bt3ziyg07VqzZs2nRsm371q3cuQvr2r3bJ6/evXr6+v3Lh25dwoUNI06smHHjwIIhG8YzWfEey47JEt7cuTJjhmFSq77DuvWb17DjyJ7tprZtObhzo1adurVr2K9n07ZdO7fuhbx7+74DPLjwOMSLG5ezm/dy5s2fQ48+nTry5Nebv+nRHt1N9+qrl4snz306QzHw46uZTz+N/ftr8utnw79/m/8AvhcffPTVd599+u3XH38ABrjQgAQWqMaBCCa4xoIMNtiGgANKOCGFFl6IoYYbPgihhxSmESKGbJDIoXwSprjiiBoyBMaNOMKh445n9OijGUAGWcaQRKJh5JE24njjjjz62GOQQhI55JFILqTkkkzC4eSTUJoh5ZRUopGkkllquWWXXn4ZpphWXlnmlmeg+WUZa46ZY5ZwyqlmmBj16eefgAYq6KCEFppQP4gmquiijDbq6KOQRirppJRWaumlmGaq6aacdippQAAh+QQFCgD/ACwGAAYAJAAeAAAI/wDrCBxIpqBBOwgTzlnIkI7Dh3kiShxI0GDBhAoZLnwIUWJEigItXsRoR+NGjnQ8fgQpkgzJkiZRplQJsk7LlybnyFSZp+ZNkjl3quRDtOiYo0j7KF2Kp6lTPVCj7plKtahRpEeXMnXaNKpUqlOtEsWaVWsfrl296gEbVizZMWbPolW7lq1YPm/josVDl+2eu3nN7u3LVo7hw2ESK77DuPGbx5DjSJ7sprLlw4gVJ27sGPLjyZQtV8ZsWPNmznc8fwYdR/Ro0qbDoE6tmnVr16TlxJ6t+o1t125y70bd+7frNsiTi1nOXI3z52miS19DvTqb69iTK2e+/Dl06dGrW4DHfl07cu7dvasBH178GvLlzaMXo349e/fv4ZtvM78++zT4wcfGfv2p91+A8KGh4IJgNOggHBBGeMaEFJph4YVlZKjhggw62GCEElI44YUYapghhwp6+CGIcIg4IolmmHgiiiqCwWKLLsIYo4woolHjjS6eoaOMZfT4I4tBDiljQAAh+QQFCgD/ACwGAAYAJAAeAAAI/wDzCBxYp6BBMggT2lnIcI7Dh3QiShxI0GDBhAoZLnwIUWJEigItXsRIRuNGjnM8fgQpsg7JkiZRplQJMk/LlybtyFRJp+ZNkjl3qtxDtCifo0jHKF3ap6lTPFCj6plKtahRpEeXMnXaNKpUqlOtEsWaVesYrl294gEbVixZPmbPolW7lq3YPW/jou1Dl62eu3nN7u3L1o3hw3ISKw7DuPGdx5DfSJ4cp7Llw4gVJ27sGPLjyZQtV8ZsWPNmzmE8fwb9RvRo0qbloE6tmnVr16TdxJ6t+o5t13Fy70bd+7drNsiTt1nOXIzz52qiS09Dvfqa69iTK2e+/Dl06dGrW4DHfl07cu7dvYsBH158GvLlzaNvo349e/fv4ZtnM78+ezX4wbfGfv2p91+A8JWh4IJoNOggGBBGCMeEFJ5h4YVmZKjhggw62GCEElI44YUYapghhwp6+CGIYIg4IolnmHgiiiqiwWKLLsIYo4wollHjjS7CoaOMZvT4I4tBDiljQAAh+QQFCgD/ACwGAAYAJAAeAAAI/wDpCByYp6DBOggTklnI0I7Dh3MiShxI0GDBhAoZLnwIUWJEigItXsRYR+NGjnY8fgQpMg/JkiZRplQJkk7LlybJyFQ5p+ZNkjl3qtRDtOieo0j5KF06pqnTPlCj4plKtahRpEeXMnXaNKpUqlOtEsWaVSsfrl299gEbVizZPWbPolW7lq1YPW/joh1Dly2eu3nN7u3LNo7hw24SK5bDuHGYx5DvSJ78prLlw4gVJ27sGPLjyZQtV8ZsWPNmznI8fwZ9R/Ro0qbdoE6tmnVr16TjxJ6tOoxt129y70bd+7frNciTs1nOvI3z52KiS1dDvXqa69iTK2e+/Dl06dGrW4DHfl07cu7dvbcBH168GvLlzaNno349e/fv4ZtfM78+ezH4wZfGfv2p91+A8Jmh4IJlNOggGhBGCMaEFMJh4YVnZKjhggw62GCEElI44YUYapghhwp6+CGIaIg4IolwmHgiiiqWwWKLLsIYo4womlHjjS6CoaOMZ/T4I4tBDiljQAAh+QQFCgD/ACwGAAYAJAAeAAAI/wDnCBxIp6DBPAgT1lnIkIzDh3YiShxI0GDBhAoZLnwIUWJEigItXsSYR+NGjmQ8fgQpkg7JkiZRplQJck7LlybryFRpp+ZNkjl3qsRDtKieo0j3KF3Kp6nTMVCj9plKtahRpEeXMnXaNKpUqlOtEsWaVeserl29jgEbVixZPWbPolW7lq1YPG/jouVDl22fu3nN7u3L9o3hw3ESK3bDuLGcx5DDSJ58p7Llw4gVJ27sGPLjyZQtV8ZsWPNmzm48fwYdRvRo0qbjoE6tmnVr16TfxJ6tWo5t13dy70bd+7frNMiTr1nOnI3z522iSxdDvbqa69iTK2e+/Dl06dGrW4DHfl07cu7dvbMBH168GPLlzaNfo349e/fv4ZtPM78++zb4wafGfv2p91+A8J2h4IJmNOhgGRBGiMaEFIJh4YVwZKjhggw62GCEElI44YUYapghhwp6+CGIZYg4IolgmHgiiiqawWKLLsIYo4wonlHjjS6ioaOMcPT4I4tBDiljQAAh+QQFCgD/ACwGAAYAJAAeAAAI/wDtCBw4p6BBOggT5lnIsI7Dh2QiShxI0GDBhAoZLnwIUWJEigItXsRIR+NGjnU8fgQpcg7JkiZRplQJ0k7LlybzyFRJpuZNkjl3quxDtCieo0j1KF26p6lTPlCjjplKtahRpEeXMnXaNKpUqlOtEsWaVaserl298gEbVixZPGbPolW7lq3YPm/jot1Dl+2Yu3nN7u3L9o7hw28SK47DuLGbx5DlSJ4cprLlw4gVJ27sGPLjyZQtV8ZsWPNmznE8fwYtR/Ro0qbfoE6tmnVr16TvxJ6t2o1t12Fy70bd+7drNciTp1nOfI3z52yiS29DvbqY69iTK2e+/Dl06dGrW4DHfl07cu7dva8BH158G/LlzaNPo349e/fv4ZtXM78+ezb4wSfGfv2p91+A8MGh4IJnNOigGRBGWMaEFKJh4YVgZKjhggw62GCEElI44YUYapghhwp6+CGIZog4IolomHgiiiqewWKLLsIYo4wowlHjjS6WoaOMYPT4I4tBDiljQAAh+QQFAAD/ACwGAAYAJAAeAAAI/wDtCBQIaI5Bg3/oKFQoJI9Dh0rqSJTIhIzFiwPtGDpoEMlChUAeOlwyUaKTixgHbuTo8WNIkSRLnkRJJmNBjgk/NhQZsWRFmhkVcJwT4yMdBiLzFChZhwDNmgO1DA1ilErSW0yzPc1o5xCer1+H6Bk7VsCes2ct8Fm71saYt3D7yJXrFSwesWT1mEW7pwLbtnDjzu2jxS6eA3n1ZOC7B9dfPqoCvx0s95LhF4ldMEb1WJbkMZT7JDHsJ3EhxoMeL/gcerTd0nlP8039d7VkuXdy36n1pndvDHGCB8/kpnhxCXKSJ58Vprlz3boT+e6dQnhwBMaLe1CenJXz79DvVP+a/oab9Ti6srvZwF3OjO/goU8in+s8J/Wk2ruC3zw8L/KgnBeIekW09wB/YYTXC4ACEmhgGGJEGKEaFFaYxoUYrqHhhmx06GEbIIYo4YgVUkgLhhemsqGGj3jYISQhgtjKiBOWuAOKaRCy4ho4uMgGCTG2YQKNYpSoxo0o6rhijy4CGeOQNBp5AY6i7BiCjzcECQuRRjaC4xQ7LuKjAUEqAsaZZ8Khppq0nOGmmxSYIaecJZRhp50ToKGnnh+gmeaacNjyppu7zClnJHfaKcmeenri559rljLoGZQYakYEiZbBAaNomPIooHAIMukplmKa6KaMbvIpoKIOqkmpmaIUumcnq6456RmWmpFpGZyi8SgYAQEAIfkEBQAA/wAsBgAGACQAHQAACP8A7QhsMKdgQUR0Eia0kqdhQyl1IkYMQKaiRYF2pBksOEBhwnAOG2qTGNGXxYsYNwbxSIdKyDz2SNbJdrIiRoHLDMJgKeNlB5kAapK5aYeHQYQeGYaESJJiTaIEN7I04hOoUKI1Ns5Bp6erniZ7woalwads2Sdj0qrtw5ZtAzxw43rtClbsHrJm+aBVm7at27hy5+oRYHdPhbx8vvDt69cLYDyODgiuKxYX4r18/fbR8hguPMHJCntArGPxGM01OuOZJjhDYRCIwZnWvAzPHWtvcufOEad37x5uggc3Jqd48Vdhkiu/w7z5HXW6dfvuXU24cOPFgSlffieM8zuJor//wTY9DgLrbjxgl+Nuu/vvCcRjKM8FPZH1+Nxv/y7+Tfk46LmxnnHIvedcfNHxNh1w1t1XXBsQtpGFGBRWqMaFFyaQxoYbkrPGhx9GwcaII8bSBjMRQvhNhRZiqIYwHG74DogfkmhjCym2sQ6LFLqoxjAxpgENjWtAYCMbN+R4BY9i+HhBkIwQGcKRJqY4IY8+ahjjOUSKSGKSKcLCpJNQSnkkGmiiyQ8YbLYJx5tvinDGnHPuY8add2pQxp57KpNmFW26CSccx9A5JwV43jkOn3tCkeYRgbI5KByfGHrGD4mawQKjZaCQJhqRgjEpNZaekOk9nLbwKRorCApnM5YiC5poCZw6+ukHbQYEACH5BAUAAP8ALAYABgAkAB4AAAj/AMmQsUOQYIM5CBEiosOQoZU8ECFKqUORYgCBGDMWJKggIUJ2DRkyiAixQEWKBMgAyChwo50aHufACEnHCMk8HU5WzMdy4EYeMePRlHGzi06UPV129BiD5kiSJnXyZOkSqEehIYmS7IKKj1evxMaIHdunbNlLeNKmfaGnbVsXe+LGrfDV65exZM328aI2rSO3bQXIjTuqLp9VeMXq7ROqL54BgPVsGbzHMOLEixv3hQx48uDCXnUkHrOYh2N5kZNR9vD1yejFDRwfiNyEMo26YXLrvsObt6U3wIFzi0OcOCY3yJFvkMOc+QzdYXrzvhAceIrixBEkRw6pOfN00KXf/xlR/Y0K7HHqbXezzbucB+F7/64+HPvx7SDcP4cenXe08uWgh8x6Frj3C3/93ZFAeTmgx8V6RLj3CoLipWFhGuasoaGGUbDhoYf0tCGiiFmIYeKJaqSYYgIX+rChhjh86CEJI4powokoqqjGDhemwciLa4QgIxs31NgGLDiaqKMaF/TYDpDFDNmNkeIkKcaS8/SYhosvBjOkN0ZeY+WS+miZxhRALjKkAUYqMqaOjfR4xhknmGGnnRqUoaeeDqDhp58rgCHooHAUWugwcyZ6BgV32unMnnpO8KefHwxKqKFwYKFooj80agYLkJaBwqRoHGGpoJjCYQ0cn2zaaaOgQiU66qSmnppqoc9symijj0Iq6aSV2norHJue4akZoZZBKhqnghEQACH5BAUAAP8ALAYABgAkAB4AAAj/AO0IFAhojkGDf+goVCgkj0OHSupIlMiEjMWLA+0YOmgQyUKFQB46XDJRopOLGAdu5OjxY0iRJEueREkmY0GOCT82FBmxZEWaGRVwnBPjIx0GIvMUKFmHAM2aA7UMDWKUStJbTLM9zWjnEJ6vX4foGTtWwJ6zZy3wWbvWxpi3cPvIlesVLB6xZPWYRbunAtu2cOPO7aPFLp4DefVk4LsH118+qgK/HSz3kuEXiV0wRvVYluQxlPskMewncSHGgx4v+Bx6tN3SeU/zTf13tWS5d3LfqfWmd28McYIHz+SmeHEJcpInnxWmuXPduhP57p1CeHAExot7UJ6clfPv0O9U/5r+hpv1OLqyu9nAXc6M7+ChTyKf6zwn9aTau4LfPDwv8qCcF4h6RbT3AH9hhNcLgAISaGAYYkQYoRoUVpjGhRiuoeGGbHToYRsghijhiBVSSAuGF6ayoYaPeNghJCGC2MqIE5a4A4ppELLiGji4yAYJMbZhAo1ilKjGjSjquGKPLgIZ45A0GnkBjqLsGIKPNwQJC5FGNoLjFDsu4qMBQSoCxplnwqGmmrSc4aabFJghp5wllGGnnROgoaeeH6CZ5ppw2PKmm7vMKWckd9opyZ56euLnn2uWMugZlBhqRgSJlsEBo2iY8iigcAgy6SmWYpropoxu8imgog6qSamZohS6ZyerrjnpGZaakWkZnKLxKBgBAQA7");

    const modal = $('.egg-modal')
    var egg = new Egg();
    egg
    .addCode("up,up,down,down,left,right,left,right,b,a", function() {
        modal.find('.h2').text('Konami Code')
        modal.find('.modal-content').empty().append('<div class="tenor-gif-embed" data-postid="26712029" data-share-method="host" data-aspect-ratio="2.38806" data-width="100%"><a href="https://tenor.com/view/konami-gif-26712029">Konami GIF</a>from <a href="https://tenor.com/search/konami-gifs">Konami GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>')
        $('.egg-modal').addClass('open')
    })
    .addCode("r,a,i,n", function() {
        $('.thunder').show()
    })
    .addCode("c,l,e,a,r", function() {
        $('.thunder').hide()
        $('.modal').removeClass('open')
    })
    .addCode("o,w,n,e,r", function() {
        $('.modal').removeClass('open')
        clearskins()
        showskins()
    })
    .addHook(function(){
        console.log("Hook called for: " + this.activeEgg.keys);
        console.log(this.activeEgg.metadata);
    })
    .listen();
});

let interval = false

function clearskins() {
    clearInterval(interval)
    $('#skins').removeClass("open")
    $('#skins1').empty()
    $('#skins2').empty()
}

function showskins() {
    let skinRender1 = new SkinRender({
        autoResize: true,
        render: {
            taa: true
        },
        makeNonTransparentOpaque: false,
        canvas: {
            width: window.innerWidth/2,
            height: undefined
        }
    }, document.getElementById('skins1'));

    skinRender1.render({
        username: "Synio",
        optifine: true
    });

    let skinRender2 = new SkinRender({
        autoResize: true,
        render: {
            taa: true
        },
        makeNonTransparentOpaque: false,
        canvas: {
            width: window.innerWidth/2,
            height: undefined
        }
    }, document.getElementById('skins2'));

    skinRender2.render({
        username: "0bOp",
        optifine: true
    });
    
    let startTime = Date.now()
    let hasRotate = false
    interval = window.setInterval(() => {
        let t = (Date.now() - startTime) / 1000
            
        if (!hasRotate && skinRender1 && skinRender1.playerModel) {
            skinRender1.playerModel.rotation.y = -300
            hasRotate = true
            console.log(skinRender1)
        }
        let scale = Math.abs(Math.cos(Date.now()/1000))
        if(skinRender2.playerModel) {
            if(scale > 0.2) {
                skinRender2.playerModel.scale.y = scale
                skinRender2.playerModel.scale.x = scale
                skinRender2.playerModel.scale.z = scale
            }

            skinRender2.playerModel.children[0].rotation.x = 100
            skinRender2.playerModel.children[0].rotation.y = Math.sin(t * 5) / 2
            skinRender2.playerModel.children[2].rotation.x = Math.sin(t * 5) / 2
            skinRender2.playerModel.children[3].rotation.x = -Math.sin(t * 5) / 2
            skinRender2.playerModel.children[4].rotation.x = Math.sin(t * 5) / 2
            skinRender2.playerModel.children[5].rotation.x = -Math.sin(t * 5) / 2

            skinRender2.playerModel.children[2].rotation.z = 500
            skinRender2.playerModel.children[3].rotation.z = -500
        }

        if(skinRender1.playerModel) {
            if(scale > 0.2) {
                skinRender1.playerModel.scale.y = scale
                skinRender1.playerModel.scale.x = scale
                skinRender1.playerModel.scale.z = scale
            }
            skinRender1.playerModel.children[0].rotation.x = 100;
            skinRender1.playerModel.children[0].rotation.y = Math.sin(t * 5) / 2
            skinRender1.playerModel.children[2].rotation.x = Math.sin(t * 5) / 2
            skinRender1.playerModel.children[3].rotation.x = -Math.sin(t * 5) / 2
            skinRender1.playerModel.children[4].rotation.x = Math.sin(t * 5) / 2
            skinRender1.playerModel.children[5].rotation.x = -Math.sin(t * 5) / 2

            skinRender1.playerModel.children[2].rotation.z = 500
            skinRender1.playerModel.children[3].rotation.z = -500
        }
    }, 50);

    $('#skins').addClass("open")

    window.setTimeout(() => {
        clearskins()
    }, 10000);
}