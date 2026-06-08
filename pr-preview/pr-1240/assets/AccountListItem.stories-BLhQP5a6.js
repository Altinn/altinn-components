import{a7 as t,c as o}from"./iframe-BtrieXtc.js";import{S as s}from"./Handshake-g7FaD3Nk.js";import{S as e}from"./Bell-BG-31dmr.js";import{S as n}from"./Hashtag-CNzIzumI.js";import{S as p}from"./Files-TVcPi0qM.js";import{A as l}from"./AccountListItem-CkqJXpn6.js";import{A as m}from"./AccountListItemDetails-CdBMd4Dc.js";import{L as c}from"./List-Ctw9DCkr.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-Bl6lMnFz.js";import"./Input-BbNTIeCv.js";import"./Avatar-CpJVuKGv.js";import"./AvatarGroup-B_fE5muE.js";import"./Badge-BaL1X3jx.js";import"./Tooltip-CavTLnec.js";import"./Heading-CdtnAJEW.js";import"./useHighlightedText-B6dVubhR.js";import"./ChevronUp-ByxPUPOK.js";import"./ChevronDown-BfacC3TQ.js";import"./ChevronRight-DjbS-LPA.js";import"./HeartFill-BilN-GbW.js";import"./ContextMenu-D3dKMSB7.js";import"./useDropdownMenuController-DeNWB_nX.js";import"./Dropdown-CPgwwZJ7.js";import"./SearchField-Du6Gz1k6.js";import"./MagnifyingGlass-C5aguymI.js";import"./FieldBase-CTDBNJ5K.js";import"./Typography-BRa08Jyj.js";import"./Field-D8_JVLdM.js";import"./Label-ERyazbFa.js";import"./useMenu-BNfzuibe.js";import"./MenuListItem-BMqPUKCV.js";import"./MenuListHeading-D0-5HT2_.js";import"./MenuItem-CHl6gjJ7.js";import"./ItemMedia-eBYq579p.js";import"./Checkmark-W3qwARKA.js";import"./ItemLabel-5cZaNnaj.js";import"./ItemControls-DyiOoqOz.js";import"./index-DyGDkSgg.js";import"./InformationSquare-BnFcng2B.js";import"./MenuElipsisHorizontal-26vaDD2T.js";import"./Section-UNmwoB7j.js";import"./Flex-Dld0WRRq.js";import"./ButtonGroup-CVtevVNY.js";import"./Divider-B28POed8.js";import"./SettingsItem-DsjWSWmB.js";import"./SettingsItemBase-DWJ69Eh4.js";import"./ItemBase-BOh1wieW.js";import"./ItemLink-jSdmZiom.js";import"./SettingsModal-BH3rW1aX.js";import"./ModalBody-B4Te2i-O.js";import"./ButtonIcon-nvXcIoKP.js";import"./ButtonLabel-CyEgs9OW.js";import"./AccountOrganization-BjFo0z-n.js";import"./Byline-BjsIFoc7.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
