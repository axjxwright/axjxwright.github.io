

export default class Application
{

	constructor()
	{
		this.master = Tone.Master;
		this.crusher = new Tone.BitCrusher(4);
		this.reverb = new Tone.Reverb(1);

		this.boxToSynth = new Map();
		this.synths = [];
		this.playing = true;
		this.tempo = 30;
		this.frame = 0;
		this.counter = 0;

		var notes = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4"];

		var container = document.querySelector ( ".button-matrix" );
		var id = 0;
		for ( var i = 0; i < 10; i++ )
		{
			this.synths[i] = [];
			for ( var j = 0; j < 10; j++ )
			{
				var element = document.createElement("input");
				element.id = `button_${id}`;
				element.type="checkbox";
				element.classList.add("toggle");
				element.addEventListener("change", (event) =>
				{
					console.log(event.target.id);
					this.hit(event.target.id);
				});
				container.append(element);

				const synth = new Tone.MonoSynth({
					oscillator: {
						type: "square"
					},
					envelope: {
						attack: 0.1
					}
				}).chain(this.reverb, this.crusher, Tone.Master);

				this.boxToSynth.set ( element.id,
				{
					el : element,
					synth : synth,
					note : notes[i]
				});

				this.synths[i][j] = element.id;

				id++;
			}
		}

		//this.volume.start();
		//this.crusher.start();
		//this.reverb.start();

		//this.delay = new Tone.Delay(1.0).chain(this.volume, Tone.Master);

		document.querySelector("#volume-knob").addEventListener ( "input", (event) =>
		{
			var v = (event.target.value / 100.0) + 0.01;
			Tone.Master.volume.value = Tone.gainToDb(v);
		});

		document.querySelector("#delay-knob").addEventListener ( "input", (event) =>
		{
			var v = event.target.value / 100.0;
			this.crusher.set ( { wet : v } );
		});

		document.querySelector("#reverb-knob").addEventListener ( "input", (event) =>
		{
			var v = event.target.value / 100.0;
			this.reverb.set ( { decay : 0.01 + v * 10.0 } );
		});

		document.querySelector("#tempo-knob").addEventListener ( "input", (event) =>
		{
			var v = 105 - event.target.value
			this.tempo = v;
		});

		document.documentElement.addEventListener(
			  "mousedown", function(){
			    //mouse_IsDown = true;
			    if (Tone.context.state !== 'running') {
			    Tone.context.resume();
			  }})
	}

	hit(id)
	{
		return;
		var el = this.boxToSynth.get(id);
		el.synth.triggerAttackRelease(el.note, "8n");
	}

	hitIf(id)
	{
		var el = this.boxToSynth.get(id);
		if ( el.el.checked )
		{
			console.log("trigger");
			el.synth.triggerAttackRelease(el.note, "8n");
		}
	}

	tick()
	{
		var playing = document.querySelector ( "#play-switch").value == 1;

		if ( playing )
		{
			if ( this.frame++ % this.tempo == 0 )
			{
				this.counter++;
				this.counter %= this.synths.length;
				
				for ( var i = 0; i < this.synths.length; i++ )
				{
					for ( var j = 0; j < this.synths[i].length; j++ )
					{
						var el = this.boxToSynth.get(this.synths[i][j]);
						el.el.classList.remove("toggle-playing");
						if ( j == this.counter )
						{
							el.el.classList.add("toggle-playing");
							this.hitIf ( this.synths[i][j] );
						}
					}
				}
			}
		}
	}
}