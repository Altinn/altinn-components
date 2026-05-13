import{j as t}from"./iframe-aW2Ivac6.js";import{S as a}from"./Handshake-B1tudbMh.js";import{S as e}from"./Bell-DmB39Dyn.js";import{S as s}from"./Hashtag-DXpzEs6q.js";import{S as n}from"./Files-D0_ptg8X.js";import{A as p}from"./AccountListItem-CbEc4xGp.js";import{L as m}from"./List-CzhnQ1IJ.js";import{A as l}from"./AccountListItemDetails-BIP80eIW.js";import{B as c}from"./Button-RX-ew4zS.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DH4aqM3h.js";import"./ListItem-Jon2HuNq.js";import"./index-DWa6FdCb.js";import"./Input-S7hdVfLT.js";import"./input-DBhNK3CK.js";import"./lite-DaUVFjkg.js";import"./XMark-DUdkEKb2.js";import"./Icon-CD7MnEv7.js";import"./Skeleton-it7stJ0Q.js";import"./Avatar-C-j1g9mt.js";import"./AvatarGroup-Btn-kZJL.js";import"./Badge-WunB0MzM.js";import"./Tooltip-DYC812UO.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CB7-Iow2.js";import"./Heading-D9dg30ti.js";import"./useHighlightedText-ZQImmj57.js";import"./ChevronUp-Cb22o5aT.js";import"./ChevronDown-B1Tnrqm5.js";import"./ChevronRight-Bcq_DMzy.js";import"./HeartFill-DuQrzvmx.js";import"./ContextMenu-CG5GStLp.js";import"./useDropdownMenuController-CJ9HEXOr.js";import"./Dropdown-BOvlApQ8.js";import"./MenuElipsisHorizontal-DY0_PRao.js";import"./SearchField-uUwTRA3v.js";import"./MagnifyingGlass-CZzm3B-3.js";import"./FieldBase-CdSvcvFX.js";import"./Typography-JHHWywcS.js";import"./Label-UVt4ZlNT.js";import"./index-BzK4-cKk.js";import"./MenuListItem-Nc9dF1O6.js";import"./MenuListHeading-CkJcv2mm.js";import"./MenuItem-COYpbW6V.js";import"./ItemMedia-D2IPLDQS.js";import"./Checkmark-BjMWNebU.js";import"./ItemControls-BfAmDR5q.js";import"./useMenu-ChK92nmD.js";import"./index-CSsgmh7M.js";import"./InformationSquare-BtbGMdWt.js";import"./Flex-CJSQwJ4K.js";import"./Section-BsfLh2yG.js";import"./ButtonGroup-BjSwpoTC.js";import"./Divider-QggnE37Q.js";import"./SettingsItem-BGcsPcQg.js";import"./SettingsItemBase-CJB5-OJo.js";import"./ItemLink-BWqCuyi6.js";import"./SettingsModal-Dm03By8e.js";import"./ModalBody-_o4wF_hP.js";import"./ButtonIcon-CYRzucye.js";import"./ButtonLabel-DF873RLr.js";import"./AccountOrganization-DUWLkQ3F.js";import"./Byline-tX5_ZM73.js";import"./button-CCQIf2kf.js";const ft={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const St=["Default","Expanded"];export{r as Default,i as Expanded,St as __namedExportsOrder,ft as default};
