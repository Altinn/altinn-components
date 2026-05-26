import{j as t}from"./iframe-DU0n7__8.js";import{S as o}from"./Handshake-hRCxhHFt.js";import{S as e}from"./Bell-BcvPsB0o.js";import{S as s}from"./Hashtag-A8SC9ssc.js";import{S as n}from"./Files-DRXx6mX2.js";import{A as p}from"./AccountListItem-CHS1FoBm.js";import{L as m}from"./List-D0aDTMjw.js";import{A as l}from"./AccountListItemDetails-BgvvZVlY.js";import{B as c}from"./Button-pXyw-iqn.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DCXiBgwp.js";import"./ListItem-DQYNDMBV.js";import"./index-sAFX08uI.js";import"./Input-Cjh3ClWU.js";import"./tooltip-UENHGvJl.js";import"./XMark-DGVnrVrT.js";import"./Icon-Dg7nJLrw.js";import"./Skeleton-etbnaSOo.js";import"./Avatar-Bsgd2iIp.js";import"./AvatarGroup-BpsuUsFp.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./Heading-BrrIdLRc.js";import"./useHighlightedText-Wa_y882s.js";import"./ChevronUp-B4O89os7.js";import"./ChevronDown-Bfnu4XYc.js";import"./ChevronRight-B4fDZY6k.js";import"./HeartFill-CtZjD9gP.js";import"./ContextMenu-ki5GIL8X.js";import"./useDropdownMenuController-BCWUKN9Y.js";import"./Dropdown-Bvq9VpIR.js";import"./MenuElipsisHorizontal-BxaMmiED.js";import"./SearchField-B4KuSSyF.js";import"./MagnifyingGlass-COVfkIqf.js";import"./FieldBase-BIV16XC5.js";import"./Typography-DOUoXZCv.js";import"./Label-DSFEyVbW.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuListHeading-iogtqFYg.js";import"./MenuItem--8QkhFJ4.js";import"./ItemMedia-yH6oBbwQ.js";import"./Checkmark-CCpN8hs9.js";import"./ItemControls-BwQhe1K-.js";import"./useMenu-CrvHU43k.js";import"./index-Cyw62YTk.js";import"./InformationSquare-Bfq2NTGF.js";import"./Flex-C_O_eubX.js";import"./Section-DwU7Gyqo.js";import"./ButtonGroup-rBVDnBd_.js";import"./Divider-DCKDjoOC.js";import"./SettingsItem-CDCQGE9p.js";import"./SettingsItemBase-DMrHKdiZ.js";import"./ItemLink-B8GeE3YY.js";import"./SettingsModal-DHjDeK3E.js";import"./ModalBody-DelIgQsz.js";import"./ButtonIcon-FC_tMBA0.js";import"./ButtonLabel-DfiBlqye.js";import"./AccountOrganization-GHHD9ERG.js";import"./Byline-D-DCimye.js";const xt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(m,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:o,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
