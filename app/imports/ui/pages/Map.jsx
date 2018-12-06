class App extends Component {
	constructor() {

		var Dungeon = {
			map: null,
			map_size: 64,
			rooms: [],
			Generate() {
				this.map = [];
				for (var x = 0; x < this.map_size; x++) {
					this.map[x] = [];
					for (var y = 0; y < this.map_size; y++) {
						this.map[x][y] = 0;
					}
				}
				//room numbers here
				var room_count = Helpers.GetRandom(3, 8);
				var min_size = 5;
				var max_size = 15;

				for (var i = 0; i < room_count; i++) {
					var room = {};

					room.x = Helpers.GetRandom(1, this.map_size - max_size - 1);
					room.y = Helpers.GetRandom(1, this.map_size - max_size - 1);
					room.w = Helpers.GetRandom(min_size, max_size);
					room.h = Helpers.GetRandom(min_size, max_size);

					if (this.DoesCollide(room)) {
						i--;
						continue;
					}
					room.w--;
					room.h--;

					this.rooms.push(room);
				}

				this.SquashRooms();

				for (i = 0; i < room_count; i++) {
					var roomA = this.rooms[i];
					var roomB = this.FindClosestRoom(roomA);

					pointA = {
						x: Helpers.GetRandom(roomA.x, roomA.x + roomA.w),
						y: Helpers.GetRandom(roomA.y, roomA.y + roomA.h)
					};
					pointB = {
						x: Helpers.GetRandom(roomB.x, roomB.x + roomB.w),
						y: Helpers.GetRandom(roomB.y, roomB.y + roomB.h)
					};

					while ((pointB.x != pointA.x) || (pointB.y != pointA.y)) {
						if (pointB.x != pointA.x) {
							if (pointB.x > pointA.x) pointB.x--;
							else pointB.x++;
						} else if (pointB.y != pointA.y) {
							if (pointB.y > pointA.y) pointB.y--;
							else pointB.y++;
						}

						this.map[pointB.x][pointB.y] = 1;
					}
				}

				for (i = 0; i < room_count; i++) {
					var room = this.rooms[i];
					for (var x = room.x; x < room.x + room.w; x++) {
						for (var y = room.y; y < room.y + room.h; y++) {
							this.map[x][y] = 1;
						}
					}
				}

				for (var x = 0; x < this.map_size; x++) {
					for (var y = 0; y < this.map_size; y++) {
						if (this.map[x][y] == 1) {
							for (var xx = x - 1; xx <= x + 1; xx++) {
								for (var yy = y - 1; yy <= y + 1; yy++) {
									if (this.map[xx][yy] == 0) this.map[xx][yy] = 2;
								}
							}
						}
					}
				}
			}
			FindClosestRoom(room) {
				var mid = {
					x: room.x + (room.w / 2),
					y: room.y + (room.h / 2)
				};
				var closest = null;
				var closest_distance = 1000;
				for (var i = 0; i < this.rooms.length; i++) {
					var check = this.rooms[i];
					if (check == room) continue;
					var check_mid = {
						x: check.x + (check.w / 2),
						y: check.y + (check.h / 2)
					};
					var distance = Math.min(Math.abs(mid.x - check_mid.x) - (room.w / 2) - (check.w / 2), Math.abs(mid.y - check_mid.y) - (room.h / 2) - (check.h / 2));
					if (distance < closest_distance) {
						closest_distance = distance;
						closest = check;
					}
				}
				return closest;
			}
			SquashRooms() {
				for (var i = 0; i < 10; i++) {
					for (var j = 0; j < this.rooms.length; j++) {
						var room = this.rooms[j];
						while (true) {
							var old_position = {
								x: room.x,
								y: room.y
							};
							if (room.x > 1) room.x--;
							if (room.y > 1) room.y--;
							if ((room.x == 1) && (room.y == 1)) break;
							if (this.DoesCollide(room, j)) {
								room.x = old_position.x;
								room.y = old_position.y;
								break;
							}
						}
					}
				}
			}
			DoesCollide(room, ignore) {
				for (var i = 0; i < this.rooms.length; i++) {
					if (i == ignore) continue;
					var check = this.rooms[i];
					if (!((room.x + room.w < check.x) || (room.x > check.x + check.w) || (room.y + room.h < check.y) || (room.y > check.y + check.h))) return true;
				}

				return false;
			}


			var Renderer = {
				canvas: null,
				ctx: null,
				size: 512,
				scale: 0,
				Initialize: function () {
					this.canvas = document.getElementById('canvas');
					this.canvas.width = this.size;
					this.canvas.height = this.size;
					this.ctx = canvas.getContext('2d');
					this.scale = (this.canvas.width / Dungeon.map_size); //scale directly related to tile size
				}
				Update() {
					var floor = new Image(100, 100);
					var wall = new Image(100, 100);
					var outside = new Image(100, 100);
					var ts = 10;
					floor.src = "https://raw.githubusercontent.com/jjnaga/team-entertainment/master/floor.png";
					wall.src = "https://freepngimg.com/thumb/star/1-red-star-png-image-thumb.png";
					outside.src = "https://raw.githubusercontent.com/jjnaga/team-entertainment/master/outside.png";
					for (var y = 0; y < Dungeon.map_size; y++) {
						for (var x = 0; x < Dungeon.map_size; x++) {
							var tile = Dungeon.map[x][y];
							if (tile == 0) {
								this.ctx.drawImage(outside, x * this.scale, y * this.scale, ts, ts);
							} else if (tile == 1) {
								this.ctx.drawImage(floor, x * this.scale, y * this.scale, ts, ts);
							} else { /*need floor file*/ }
						}
					}
				}
			};

			var Helpers = {
				GetRandom: function (low, high) {
					return ~~(Math.random() * (high - low)) + low;
				}
			};
		}

		render() {
			return ( <
				canvas id = 'canvas' > < /canvas>
			);
		}
	}
