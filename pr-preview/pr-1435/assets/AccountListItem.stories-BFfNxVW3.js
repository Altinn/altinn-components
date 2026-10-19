var n=Object.defineProperty;var a=(e,s)=>n(e,"name",{value:s,configurable:!0});import{a7 as t,c as p}from"./iframe-uBWg0zsp.js";import{S as l}from"./Handshake-DS9YpcK6.js";import{S as o}from"./Bell-CJr3Xvxi.js";import{S as m}from"./Hashtag-D6bfu4ve.js";import{S as c}from"./Files-DHfgMFEx.js";import{A as g}from"./AccountListItem-DBzg8RPS.js";import{A as d}from"./AccountListItemDetails-C5ZZeImm.js";import{L as u}from"./List-CPfTuEIO.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-DZSp_PZG.js";import"./Input-BX-kD412.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./Heading-B2wyz-tz.js";import"./useHighlightedText-SyZl2q2q.js";import"./ChevronUp-BLeJynbN.js";import"./ChevronDown-DVkqLj7d.js";import"./ChevronRight-Ci7fQup2.js";import"./HeartFill-BqDYZsQS.js";import"./ContextMenu-BmGKPgKH.js";import"./useDropdownMenuController-Bo6Cy3yx.js";import"./Dropdown-xncsPjss.js";import"./SearchField-CiFTLXk1.js";import"./MagnifyingGlass-BtelB3DZ.js";import"./FieldBase-Bze69qIO.js";import"./Typography-nYxE8-3g.js";import"./Field-CRhxlWe8.js";import"./Label-BasS1jKP.js";import"./useMenu-CXJ-cLkO.js";import"./MenuListItem-CF8uHASG.js";import"./MenuListDivider-Dqpo6I2q.js";import"./MenuListHeading-BKTLR-s3.js";import"./MenuItem-SLuK_1Or.js";import"./ItemMedia-DYHGe3r3.js";import"./Checkmark-BMATBI43.js";import"./ItemLabel-BpKks5h0.js";import"./ItemControls-D7ku9ps1.js";import"./InformationSquare-D-wVMUGu.js";import"./MenuElipsisHorizontal-PnMCFiJK.js";import"./Section-B5mZZWwm.js";import"./Flex-DndVrHjj.js";import"./ButtonGroup-C6ZuBQRD.js";import"./Divider-CsxBHb0r.js";import"./SettingsItem-BKissoEa.js";import"./SettingsItemBase-Dqw8W-AX.js";import"./ItemBase-DJIQNQsT.js";import"./ItemLink-DAu62COd.js";import"./SettingsModal-BznIzZKL.js";import"./ModalBody-BN9ps4gr.js";import"./ButtonIcon-CRTvNn4A.js";import"./ButtonLabel-BCgwFtnQ.js";import"./AccountOrganization-0xAzWHp5.js";import"./Byline-9oMI9IrU.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:o,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:o,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:a(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Xt=["Default","Expanded"];export{r as Default,i as Expanded,Xt as __namedExportsOrder,xt as default};
