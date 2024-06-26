import { expect } from "expect";
import * as me from "./../public/lib/melonjs.module.js";

describe("me.plugin", function () {
	describe("patch", function () {
		class BaseObject {
			constructor() {
				this.name = "John Doe";
			}

			setType(t) {
				this.type = t;
			}
		}

		me.plugin.patch(BaseObject, "setType", function (t) {
			this._patched(t);
			this.name = "John Smith";
		});

		var obj;
		beforeEach(function () {
			obj = new BaseObject();
			obj.setType("something_awesome");
		});

		it("type should be 'something_awesome'", function () {
			expect(obj.type).toEqual("something_awesome");
		});

		it("name should be 'John Smith'", function () {
			expect(obj.name).toEqual("John Smith");
		});
	});

	describe("register", function () {
		class Plugin extends me.plugin.BasePlugin {
			constructor() {
				super();
				this.name = "myPlugin";
			}
		}

		me.plugin.register(Plugin, "ExamplePlugin");

		it("should register to the me.plugins namespace", function () {
			expect(me.plugins.ExamplePlugin).toBeDefined();
		});

		it("should not register to the me.plugin namespace", function () {
			expect(me.plugin.ExamplePlugin).not.toBeDefined();
		});
	});
});
