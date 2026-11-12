var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-M-0W2Kc9.js";import{S as l}from"./Handshake-BLgkv4lI.js";import{S as a}from"./Bell-DWIt3W7G.js";import{S as m}from"./Hashtag-CRo9Rd7e.js";import{S as c}from"./Files-D24Nxx7v.js";import{A as g}from"./AccountListItem-CEYhmY8F.js";import{A as d}from"./AccountListItemDetails-Ci0T5EcW.js";import{L as u}from"./List-DiNCcd8p.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-Cy-G_cYd.js";import"./Input-PR-EPUfC.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ChevronUp-D7bAfZe9.js";import"./ChevronDown-oFv1HZMB.js";import"./ChevronRight-e5zm3v6Y.js";import"./HeartFill-CR39zrNl.js";import"./ContextMenu-BvjrPqZd.js";import"./useDropdownMenuController-B592g0FD.js";import"./useIsDesktop-Cn7t9tR4.js";import"./Dropdown-DeOVVvS3.js";import"./SearchField-IrO9fkpT.js";import"./MagnifyingGlass-BCQWJszI.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./ItemLabel-lDW_MVeZ.js";import"./ItemControls-CUY2SrAL.js";import"./FieldBase-Bv-PdLp_.js";import"./Typography-xHph4zf_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./useMenu-D1I6Xbj7.js";import"./InformationSquare-DDYjH-iE.js";import"./Section-BRRFv94H.js";import"./Flex-CvQqYnnc.js";import"./ButtonGroup-C-A48uAy.js";import"./Divider-Dx4dxp6X.js";import"./SettingsItem-C4hV6YpS.js";import"./SettingsItemBase-BCTOKKcn.js";import"./ItemBase-F0Gk4WOT.js";import"./ItemLink-CCAm3_Nh.js";import"./SettingsModal-QTOJw0zh.js";import"./ModalBody-D2JzRsow.js";import"./ButtonIcon-B0Ww61Ca.js";import"./ButtonLabel-DaZOBcYC.js";import"./AccountOrganization-zuZFXu0D.js";import"./Byline-Cay2D8Wn.js";const bt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},Xt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,Xt as __namedExportsOrder,bt as default};
