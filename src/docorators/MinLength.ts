import 'reflect-metadata/Reflect';
import * as c from '../constants';

export default function MinLength(length: number, message?: string) {
	
	return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
	
		let name = c.prefix + c.minLength;
	
		Reflect.defineMetadata(name, length, target, propertyKey);

		if (message) {
			Reflect.defineMetadata(name + c.message, message, target, propertyKey);
		}

		return;
	}
}