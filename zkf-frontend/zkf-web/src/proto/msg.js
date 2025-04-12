/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const MsgRequest = $root.MsgRequest = (() => {

    /**
     * Properties of a MsgRequest.
     * @exports IMsgRequest
     * @interface IMsgRequest
     * @property {IRequestHeader|null} [header] MsgRequest header
     * @property {IRequestBody|null} [body] MsgRequest body
     */

    /**
     * Constructs a new MsgRequest.
     * @exports MsgRequest
     * @classdesc Represents a MsgRequest.
     * @implements IMsgRequest
     * @constructor
     * @param {IMsgRequest=} [properties] Properties to set
     */
    function MsgRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MsgRequest header.
     * @member {IRequestHeader|null|undefined} header
     * @memberof MsgRequest
     * @instance
     */
    MsgRequest.prototype.header = null;

    /**
     * MsgRequest body.
     * @member {IRequestBody|null|undefined} body
     * @memberof MsgRequest
     * @instance
     */
    MsgRequest.prototype.body = null;

    /**
     * Creates a new MsgRequest instance using the specified properties.
     * @function create
     * @memberof MsgRequest
     * @static
     * @param {IMsgRequest=} [properties] Properties to set
     * @returns {MsgRequest} MsgRequest instance
     */
    MsgRequest.create = function create(properties) {
        return new MsgRequest(properties);
    };

    /**
     * Encodes the specified MsgRequest message. Does not implicitly {@link MsgRequest.verify|verify} messages.
     * @function encode
     * @memberof MsgRequest
     * @static
     * @param {IMsgRequest} message MsgRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MsgRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
            $root.RequestHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.body != null && Object.hasOwnProperty.call(message, "body"))
            $root.RequestBody.encode(message.body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MsgRequest message, length delimited. Does not implicitly {@link MsgRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MsgRequest
     * @static
     * @param {IMsgRequest} message MsgRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MsgRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MsgRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MsgRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MsgRequest} MsgRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MsgRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MsgRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = $root.RequestHeader.decode(reader, reader.uint32());
                break;
            case 2:
                message.body = $root.RequestBody.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MsgRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MsgRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MsgRequest} MsgRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MsgRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MsgRequest message.
     * @function verify
     * @memberof MsgRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MsgRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header")) {
            let error = $root.RequestHeader.verify(message.header);
            if (error)
                return "header." + error;
        }
        if (message.body != null && message.hasOwnProperty("body")) {
            let error = $root.RequestBody.verify(message.body);
            if (error)
                return "body." + error;
        }
        return null;
    };

    /**
     * Creates a MsgRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MsgRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MsgRequest} MsgRequest
     */
    MsgRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.MsgRequest)
            return object;
        let message = new $root.MsgRequest();
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".MsgRequest.header: object expected");
            message.header = $root.RequestHeader.fromObject(object.header);
        }
        if (object.body != null) {
            if (typeof object.body !== "object")
                throw TypeError(".MsgRequest.body: object expected");
            message.body = $root.RequestBody.fromObject(object.body);
        }
        return message;
    };

    /**
     * Creates a plain object from a MsgRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MsgRequest
     * @static
     * @param {MsgRequest} message MsgRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MsgRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.header = null;
            object.body = null;
        }
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = $root.RequestHeader.toObject(message.header, options);
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = $root.RequestBody.toObject(message.body, options);
        return object;
    };

    /**
     * Converts this MsgRequest to JSON.
     * @function toJSON
     * @memberof MsgRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MsgRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgRequest;
})();

export const RequestHeader = $root.RequestHeader = (() => {

    /**
     * Properties of a RequestHeader.
     * @exports IRequestHeader
     * @interface IRequestHeader
     * @property {number|null} [magicNo] RequestHeader magicNo
     * @property {number|null} [version] RequestHeader version
     */

    /**
     * Constructs a new RequestHeader.
     * @exports RequestHeader
     * @classdesc Represents a RequestHeader.
     * @implements IRequestHeader
     * @constructor
     * @param {IRequestHeader=} [properties] Properties to set
     */
    function RequestHeader(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestHeader magicNo.
     * @member {number} magicNo
     * @memberof RequestHeader
     * @instance
     */
    RequestHeader.prototype.magicNo = 0;

    /**
     * RequestHeader version.
     * @member {number} version
     * @memberof RequestHeader
     * @instance
     */
    RequestHeader.prototype.version = 0;

    /**
     * Creates a new RequestHeader instance using the specified properties.
     * @function create
     * @memberof RequestHeader
     * @static
     * @param {IRequestHeader=} [properties] Properties to set
     * @returns {RequestHeader} RequestHeader instance
     */
    RequestHeader.create = function create(properties) {
        return new RequestHeader(properties);
    };

    /**
     * Encodes the specified RequestHeader message. Does not implicitly {@link RequestHeader.verify|verify} messages.
     * @function encode
     * @memberof RequestHeader
     * @static
     * @param {IRequestHeader} message RequestHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestHeader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.magicNo != null && Object.hasOwnProperty.call(message, "magicNo"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.magicNo);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.version);
        return writer;
    };

    /**
     * Encodes the specified RequestHeader message, length delimited. Does not implicitly {@link RequestHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestHeader
     * @static
     * @param {IRequestHeader} message RequestHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestHeader message from the specified reader or buffer.
     * @function decode
     * @memberof RequestHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestHeader} RequestHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestHeader();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.magicNo = reader.uint32();
                break;
            case 2:
                message.version = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestHeader} RequestHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestHeader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestHeader message.
     * @function verify
     * @memberof RequestHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestHeader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.magicNo != null && message.hasOwnProperty("magicNo"))
            if (!$util.isInteger(message.magicNo))
                return "magicNo: integer expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version))
                return "version: integer expected";
        return null;
    };

    /**
     * Creates a RequestHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestHeader} RequestHeader
     */
    RequestHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestHeader)
            return object;
        let message = new $root.RequestHeader();
        if (object.magicNo != null)
            message.magicNo = object.magicNo >>> 0;
        if (object.version != null)
            message.version = object.version >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a RequestHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestHeader
     * @static
     * @param {RequestHeader} message RequestHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestHeader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.magicNo = 0;
            object.version = 0;
        }
        if (message.magicNo != null && message.hasOwnProperty("magicNo"))
            object.magicNo = message.magicNo;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this RequestHeader to JSON.
     * @function toJSON
     * @memberof RequestHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RequestHeader;
})();

export const RequestBody = $root.RequestBody = (() => {

    /**
     * Properties of a RequestBody.
     * @exports IRequestBody
     * @interface IRequestBody
     * @property {number|Long|null} [msgId] RequestBody msgId
     * @property {MsgType|null} [msgType] RequestBody msgType
     * @property {string|null} [content] RequestBody content
     * @property {ContentType|null} [contentType] RequestBody contentType
     * @property {MsgStatus|null} [status] RequestBody status
     * @property {string|null} [from] RequestBody from
     * @property {string|null} [to] RequestBody to
     * @property {number|Long|null} [sendTime] RequestBody sendTime
     */

    /**
     * Constructs a new RequestBody.
     * @exports RequestBody
     * @classdesc Represents a RequestBody.
     * @implements IRequestBody
     * @constructor
     * @param {IRequestBody=} [properties] Properties to set
     */
    function RequestBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestBody msgId.
     * @member {number|Long} msgId
     * @memberof RequestBody
     * @instance
     */
    RequestBody.prototype.msgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RequestBody msgType.
     * @member {MsgType} msgType
     * @memberof RequestBody
     * @instance
     */
    RequestBody.prototype.msgType = 0;

    /**
     * RequestBody content.
     * @member {string} content
     * @memberof RequestBody
     * @instance
     */
    RequestBody.prototype.content = "";

    /**
     * RequestBody contentType.
     * @member {ContentType} contentType
     * @memberof RequestBody
     * @instance
     */
    RequestBody.prototype.contentType = 0;

    /**
     * RequestBody status.
     * @member {MsgStatus} status
     * @memberof RequestBody
     * @instance
     */
    RequestBody.prototype.status = 0;

    /**
     * RequestBody from.
     * @member {string} from
     * @memberof RequestBody
     * @instance
     */
    RequestBody.prototype.from = "";

    /**
     * RequestBody to.
     * @member {string} to
     * @memberof RequestBody
     * @instance
     */
    RequestBody.prototype.to = "";

    /**
     * RequestBody sendTime.
     * @member {number|Long} sendTime
     * @memberof RequestBody
     * @instance
     */
    RequestBody.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new RequestBody instance using the specified properties.
     * @function create
     * @memberof RequestBody
     * @static
     * @param {IRequestBody=} [properties] Properties to set
     * @returns {RequestBody} RequestBody instance
     */
    RequestBody.create = function create(properties) {
        return new RequestBody(properties);
    };

    /**
     * Encodes the specified RequestBody message. Does not implicitly {@link RequestBody.verify|verify} messages.
     * @function encode
     * @memberof RequestBody
     * @static
     * @param {IRequestBody} message RequestBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.msgId);
        if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.msgType);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
        if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.contentType);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
        if (message.from != null && Object.hasOwnProperty.call(message, "from"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.from);
        if (message.to != null && Object.hasOwnProperty.call(message, "to"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.to);
        if (message.sendTime != null && Object.hasOwnProperty.call(message, "sendTime"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.sendTime);
        return writer;
    };

    /**
     * Encodes the specified RequestBody message, length delimited. Does not implicitly {@link RequestBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestBody
     * @static
     * @param {IRequestBody} message RequestBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestBody message from the specified reader or buffer.
     * @function decode
     * @memberof RequestBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestBody} RequestBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.msgId = reader.int64();
                break;
            case 2:
                message.msgType = reader.int32();
                break;
            case 3:
                message.content = reader.string();
                break;
            case 4:
                message.contentType = reader.int32();
                break;
            case 5:
                message.status = reader.int32();
                break;
            case 6:
                message.from = reader.string();
                break;
            case 7:
                message.to = reader.string();
                break;
            case 8:
                message.sendTime = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestBody} RequestBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestBody message.
     * @function verify
     * @memberof RequestBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            if (!$util.isInteger(message.msgId) && !(message.msgId && $util.isInteger(message.msgId.low) && $util.isInteger(message.msgId.high)))
                return "msgId: integer|Long expected";
        if (message.msgType != null && message.hasOwnProperty("msgType"))
            switch (message.msgType) {
            default:
                return "msgType: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.contentType != null && message.hasOwnProperty("contentType"))
            switch (message.contentType) {
            default:
                return "contentType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.status != null && message.hasOwnProperty("status"))
            switch (message.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.from != null && message.hasOwnProperty("from"))
            if (!$util.isString(message.from))
                return "from: string expected";
        if (message.to != null && message.hasOwnProperty("to"))
            if (!$util.isString(message.to))
                return "to: string expected";
        if (message.sendTime != null && message.hasOwnProperty("sendTime"))
            if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                return "sendTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a RequestBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestBody} RequestBody
     */
    RequestBody.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestBody)
            return object;
        let message = new $root.RequestBody();
        if (object.msgId != null)
            if ($util.Long)
                (message.msgId = $util.Long.fromValue(object.msgId)).unsigned = false;
            else if (typeof object.msgId === "string")
                message.msgId = parseInt(object.msgId, 10);
            else if (typeof object.msgId === "number")
                message.msgId = object.msgId;
            else if (typeof object.msgId === "object")
                message.msgId = new $util.LongBits(object.msgId.low >>> 0, object.msgId.high >>> 0).toNumber();
        switch (object.msgType) {
        case "SINGLE":
        case 0:
            message.msgType = 0;
            break;
        case "GROUP":
        case 1:
            message.msgType = 1;
            break;
        }
        if (object.content != null)
            message.content = String(object.content);
        switch (object.contentType) {
        case "TEXT":
        case 0:
            message.contentType = 0;
            break;
        case "IMAGE":
        case 1:
            message.contentType = 1;
            break;
        case "VIDEO":
        case 2:
            message.contentType = 2;
            break;
        case "AUDIO":
        case 3:
            message.contentType = 3;
            break;
        case "FILE":
        case 4:
            message.contentType = 4;
            break;
        }
        switch (object.status) {
        case "RECEIVED":
        case 0:
            message.status = 0;
            break;
        case "READ":
        case 1:
            message.status = 1;
            break;
        case "RECALLED":
        case 2:
            message.status = 2;
            break;
        case "SENT_FAIL":
        case 3:
            message.status = 3;
            break;
        }
        if (object.from != null)
            message.from = String(object.from);
        if (object.to != null)
            message.to = String(object.to);
        if (object.sendTime != null)
            if ($util.Long)
                (message.sendTime = $util.Long.fromValue(object.sendTime)).unsigned = false;
            else if (typeof object.sendTime === "string")
                message.sendTime = parseInt(object.sendTime, 10);
            else if (typeof object.sendTime === "number")
                message.sendTime = object.sendTime;
            else if (typeof object.sendTime === "object")
                message.sendTime = new $util.LongBits(object.sendTime.low >>> 0, object.sendTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a RequestBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestBody
     * @static
     * @param {RequestBody} message RequestBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.msgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.msgId = options.longs === String ? "0" : 0;
            object.msgType = options.enums === String ? "SINGLE" : 0;
            object.content = "";
            object.contentType = options.enums === String ? "TEXT" : 0;
            object.status = options.enums === String ? "RECEIVED" : 0;
            object.from = "";
            object.to = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.sendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sendTime = options.longs === String ? "0" : 0;
        }
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            if (typeof message.msgId === "number")
                object.msgId = options.longs === String ? String(message.msgId) : message.msgId;
            else
                object.msgId = options.longs === String ? $util.Long.prototype.toString.call(message.msgId) : options.longs === Number ? new $util.LongBits(message.msgId.low >>> 0, message.msgId.high >>> 0).toNumber() : message.msgId;
        if (message.msgType != null && message.hasOwnProperty("msgType"))
            object.msgType = options.enums === String ? $root.MsgType[message.msgType] : message.msgType;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.contentType != null && message.hasOwnProperty("contentType"))
            object.contentType = options.enums === String ? $root.ContentType[message.contentType] : message.contentType;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = options.enums === String ? $root.MsgStatus[message.status] : message.status;
        if (message.from != null && message.hasOwnProperty("from"))
            object.from = message.from;
        if (message.to != null && message.hasOwnProperty("to"))
            object.to = message.to;
        if (message.sendTime != null && message.hasOwnProperty("sendTime"))
            if (typeof message.sendTime === "number")
                object.sendTime = options.longs === String ? String(message.sendTime) : message.sendTime;
            else
                object.sendTime = options.longs === String ? $util.Long.prototype.toString.call(message.sendTime) : options.longs === Number ? new $util.LongBits(message.sendTime.low >>> 0, message.sendTime.high >>> 0).toNumber() : message.sendTime;
        return object;
    };

    /**
     * Converts this RequestBody to JSON.
     * @function toJSON
     * @memberof RequestBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RequestBody;
})();

/**
 * MsgType enum.
 * @exports MsgType
 * @enum {number}
 * @property {number} SINGLE=0 SINGLE value
 * @property {number} GROUP=1 GROUP value
 */
export const MsgType = $root.MsgType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SINGLE"] = 0;
    values[valuesById[1] = "GROUP"] = 1;
    return values;
})();

/**
 * ContentType enum.
 * @exports ContentType
 * @enum {number}
 * @property {number} TEXT=0 TEXT value
 * @property {number} IMAGE=1 IMAGE value
 * @property {number} VIDEO=2 VIDEO value
 * @property {number} AUDIO=3 AUDIO value
 * @property {number} FILE=4 FILE value
 */
export const ContentType = $root.ContentType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TEXT"] = 0;
    values[valuesById[1] = "IMAGE"] = 1;
    values[valuesById[2] = "VIDEO"] = 2;
    values[valuesById[3] = "AUDIO"] = 3;
    values[valuesById[4] = "FILE"] = 4;
    return values;
})();

/**
 * MsgStatus enum.
 * @exports MsgStatus
 * @enum {number}
 * @property {number} RECEIVED=0 RECEIVED value
 * @property {number} READ=1 READ value
 * @property {number} RECALLED=2 RECALLED value
 * @property {number} SENT_FAIL=3 SENT_FAIL value
 */
export const MsgStatus = $root.MsgStatus = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RECEIVED"] = 0;
    values[valuesById[1] = "READ"] = 1;
    values[valuesById[2] = "RECALLED"] = 2;
    values[valuesById[3] = "SENT_FAIL"] = 3;
    return values;
})();

export { $root as default };
