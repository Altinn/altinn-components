var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-ZrU_khjL.js";import{S as l}from"./Handshake-T-IwG3hW.js";import{S as a}from"./Bell-TXVB7B0D.js";import{S as m}from"./Hashtag-D1hnOZOd.js";import{S as c}from"./Files-D6T0YqUd.js";import{A as g}from"./AccountListItem-iO3KMQbC.js";import{A as d}from"./AccountListItemDetails-BScYN86Q.js";import{L as u}from"./List-YiG15duf.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-CX7K8M2d.js";import"./Input-pcnWwkdM.js";import"./Avatar-Cz72QNux.js";import"./AvatarGroup-Bva3vDjZ.js";import"./Badge-CRj8wKrC.js";import"./Tooltip-Dbgfurbn.js";import"./Heading-CifG33hf.js";import"./useHighlightedText-CDx2rO1x.js";import"./ChevronUp-CSSlqESb.js";import"./ChevronDown-BB20zuC9.js";import"./ChevronRight-I-BGQZW2.js";import"./HeartFill-Cd4P8gX9.js";import"./ContextMenu-xJ1M0fI4.js";import"./useDropdownMenuController-BciGPL7q.js";import"./Dropdown-CeljIqa3.js";import"./SearchField-BKf2_wz5.js";import"./MagnifyingGlass-Daj1V0tq.js";import"./MenuListItem-UylFm72-.js";import"./MenuListDivider-Frk75rx_.js";import"./MenuItem-Cnq3lS8W.js";import"./CheckboxUncheckedIcon-D5_rz1Ju.js";import"./RadioUncheckedIcon-DY3mbg0B.js";import"./ItemMedia-RrQv9WL4.js";import"./ItemLabel-Dkx3E56O.js";import"./ItemControls-BPrmzCX9.js";import"./FieldBase-Bti6f0lr.js";import"./Typography-FbkShcFO.js";import"./Field-DiIDUIXB.js";import"./Label-C-OC1u9M.js";import"./useMenu-D1AoRPPj.js";import"./InformationSquare-v_Dcjud5.js";import"./Section-dsTDEP7F.js";import"./Flex-DJ1B1xxZ.js";import"./ButtonGroup-5s3aXo0U.js";import"./Divider-CXHk2q9s.js";import"./SettingsItem-DRGbu_im.js";import"./SettingsItemBase-C8UblevF.js";import"./ItemBase-CSRJSwJc.js";import"./ItemLink-iiWI53PI.js";import"./SettingsModal-jqhIWQgm.js";import"./ModalBody-CLgzlTKt.js";import"./ButtonIcon-DcntwKuS.js";import"./ButtonLabel-CQpgzAD-.js";import"./AccountOrganization-D8ck1qEE.js";import"./Byline-DA-9AELx.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,bt as __namedExportsOrder,xt as default};
