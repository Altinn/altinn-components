var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a5 as t,b as p}from"./iframe-CQ8LzMHp.js";import{S as m}from"./Handshake-D7-IJ296.js";import{S as a}from"./Bell-BFG-txqD.js";import{S as l}from"./Hashtag-C3ZgRoxy.js";import{S as c}from"./Files-DrCcdwR8.js";import{A as g}from"./AccountListItem-Bt8Zb-T1.js";import{A as d}from"./AccountListItemDetails-CQ8_5onZ.js";import{L as u}from"./List-DOKhwhdW.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-BwJteLX3.js";import"./Input-BKSTqttN.js";import"./Avatar-cvm5lBsk.js";import"./AvatarGroup-DeE95cBJ.js";import"./Badge-DUcHOS9Y.js";import"./Tooltip-Eed-mcd2.js";import"./Heading-Bqh3Rpnn.js";import"./useHighlightedText-X_Pa7Sct.js";import"./ChevronUp-C1AG-Aka.js";import"./ChevronDown-BCthsF-h.js";import"./ChevronRight-ywpt7Pxk.js";import"./HeartFill-mxtM7vZy.js";import"./ContextMenu-nxKWxJk3.js";import"./useDropdownMenuController-9HzeHRnC.js";import"./Dropdown-AuOHSehb.js";import"./SearchField-0g3sCasv.js";import"./MagnifyingGlass-cYMoIKgd.js";import"./MenuListItem-BuDRebVM.js";import"./MenuListHeading-CsWBJhah.js";import"./MenuItem-DNZJHOTT.js";import"./CheckboxUncheckedIcon-DodbdVRp.js";import"./RadioUncheckedIcon-QGnejBkB.js";import"./ItemMedia-BTxysFbk.js";import"./ItemLabel-CgsktDzP.js";import"./ItemControls--xlpWt8t.js";import"./FieldBase-wKpsF2Qr.js";import"./Typography-C0hb-rov.js";import"./Field-I35AXfO5.js";import"./Label-BS-vPhzZ.js";import"./useMenu-CDI-E8wX.js";import"./MenuListDivider-n9hRAznf.js";import"./InformationSquare-BtVNFzkX.js";import"./MenuElipsisHorizontal-Dwc1VYHN.js";import"./Section-NN2pd56z.js";import"./Flex-DjPJH1VJ.js";import"./ButtonGroup-CwiMzic7.js";import"./Divider-d-9l0yLk.js";import"./SettingsItem-D6MtlqED.js";import"./SettingsItemBase-BVhzaaj2.js";import"./ItemBase-0kMSewyg.js";import"./ItemLink-DOceCTcu.js";import"./SettingsModal-BvYFfYAZ.js";import"./ModalBody-CI4rT6G0.js";import"./ButtonIcon-Dkl2vj3J.js";import"./ButtonLabel-BtfFre3A.js";import"./AccountOrganization-D8dsZpsp.js";import"./Byline-DxUiDI_d.js";const Xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:m,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:l,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},It=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,It as __namedExportsOrder,Xt as default};
